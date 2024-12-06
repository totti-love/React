import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"))
const FakultasList = React.lazy(() => import("./components/Fakultas/List"))
const ProdiList = React.lazy(() => import("./components/Prodi/List"))
const MhsList = React.lazy(() => import("./components/Mahasiswa/List"))
function App() {

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fakultas" className="nav-link">Fakultas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/prodi" className="nav-link">Program Studi</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/fakultas" element={< FakultasList />} />
        <Route path="/prodi" element={< ProdiList />} />
        <Route path="/mahasiswa" element={< MhsList />} />
      </Routes>
    </Router>
  )
}

export default App