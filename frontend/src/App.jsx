// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Register from "./pages/Register";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Contact from "./pages/Contact";

import DashboardLayout from "./components/dashboard/DashboardLayout";

import Dashboard from "./pages/dashboard/Dashboard";
import Documents from "./pages/dashboard/Documents";
import Folders from "./pages/dashboard/Folders";
import Recent from "./pages/dashboard/Recent";
import Starred from "./pages/dashboard/Starred";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/dashboard/documents" element={<Documents />} />

          <Route path="/dashboard/folders" element={<Folders />} />

          <Route path="/dashboard/recent" element={<Recent />} />

          <Route path="/dashboard/starred" element={<Starred />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
