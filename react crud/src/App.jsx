import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

//import ProtectedRoute from "./components/ProtectedRoute"; // ProtectedRoute Component
import Logout from "./components/Logout";

const Home = React.lazy(() => import("./components/Home"))
const FakultasList = React.lazy(() => import("./components/Fakultas/List"))
const FakultasCreate = React.lazy(() => import("./components/Fakultas/Create"))
const FakultasEdit = React.lazy(() => import("./components/Fakultas/Edit"))
const ProdiList = React.lazy(() => import("./components/Prodi/List"))
const ProdiCreate = React.lazy(() => import("./components/Prodi/Create"))
const ProdiEdit = React.lazy(() => import("./components/Prodi/Edit"))
const MhsList = React.lazy(() => import("./components/Mahasiswa/List"))
const MhsCreate = React.lazy(() => import("./components/Mahasiswa/Create"));

const Login = React.lazy(() => import("./components/Login"));
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("authToken")); // Ambil token dari localStorage

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fakultas" className="nav-link">
                  Fakultas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/prodi" className="nav-link">
                  Program Studi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mahasiswa" className="nav-link">
                  Mahasiswa
                </NavLink>
              </li>
              <li>
                {token ? ( // Tampilkan Logout jika token ada
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="/fakultas" element={<FakultasList />} />
        <Route path="/fakultas/create" element={<FakultasCreate />} />
        <Route path="/fakultas/edit/:id" element={<FakultasEdit />} />
        <Route path="/prodi" element={<ProdiList />} />
        <Route path="/prodi/create" element={<ProdiCreate />} />
        <Route path="/prodi/edit/:id" element={<ProdiEdit />} />
        <Route path="/mahasiswa" element={<MhsList />} />
        <Route path="/mahasiswa/create" element={<MhsCreate />} />
      </Routes>
    </Router>
  );
}

export default App