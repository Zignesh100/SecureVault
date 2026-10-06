import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/Howitwork";
import SecuritySection from "../components/home/SecurityFeatures";
import DocumentTypes from "../components/home/Documents";
import WhySecureVault from "../components/home/why";
import Footer from "../components/home/Footer";
const Home = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <main className="">
        <Hero />
        <HowItWorks/>
        <SecuritySection/>
        <DocumentTypes/>
        <WhySecureVault/>
      
        <Footer/>
      </main>
    </div>
  );
};

export default Home;