import React from "react";
import "./assets/css/App.css";
import "./assets/css/Header.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
import logo from "./assets/svg/logo.jpg"; // 로고 이미지 파일 경로
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <img src={logo} alt="Logo" className="header-logo" />
            <span className="header-title">맛남의 장</span>
          </div>
          <div className="header-right">
            {/* <button className="login-button">로그인</button> */}
            <Link to="/login" className="login-button">
              로그인
            </Link>
            <button className="material-symbols-outlined">menu</button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="navbar">
          <Link to="/" className="nav-item">
            레시피
          </Link>
          <Link to="/search" className="nav-item">
            검색
          </Link>
          <div className="nav-item">게시물</div>
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
