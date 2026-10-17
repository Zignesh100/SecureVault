import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import QRCode from "qrcode";
import speakeasy from "speakeasy";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




export  const loginUser = async(req ,res )=>{
  try{
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(400).json({
        success:false,
        message:"Email and password are required",

      });
    }
    const normalizedEmail=email.trim().toLowerCase();

    const user = await User.findOne({
      email:normalizedEmail,
    });

    
if (!user) {
  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
}
      const isPasswordValid  = await bcrypt.compare(
        password,
        user.password
      );

      if(!isPasswordValid){
        return res.status(401).json({
          success: false,
            message: "Invalid email or password",
        });
      }
        if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }
    
    if(user.twoFactorEnabled){
      return res.status(501).json({
        success:false,
        message:"2FA login flow is not implemented yet",
      })
    }
    const token = jwt.sign(
      {id:user._id.toString()},
      process.env.JWT_SECRET,
      {expiresIn:"1h"}
    );

    return res.status(200).json({
     success: true,
      message: "Login successful",
      token,
       user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })


  }catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




export const getCurrentUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });
};



export const setup2FA = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "+twoFactorSecret"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.twoFactorEnabled) {
      return res.status(400).json({
        success: false,
        message: "2FA is already enabled",
      });
    }

    // Reuse an existing pending secret, if one exists.
    if (!user.twoFactorSecret) {
      const secret = speakeasy.generateSecret({
        name: `SecureVault (${user.email})`,
        length: 20,
      });

      user.twoFactorSecret = secret.base32;
      await user.save();
    }

    const otpauthUrl = speakeasy.otpauthURL({
      secret: user.twoFactorSecret,
      encoding: "base32",
      label: user.email,
      issuer: "SecureVault",
      algorithm: "sha1",
      digits: 6,
      period: 30,
    });

    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl);

    return res.status(200).json({
      success: true,
      message: "Scan the QR code with your authenticator app",
      qrCode: qrCodeDataUrl,
    });
  } catch (error) {
    console.error("2FA setup error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to set up 2FA",
    });
  }
};
