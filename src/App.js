import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import "./assets/css/Header.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import SearchPage from "./components/SearchPage.js";
import logo from "./assets/svg/logo.jpg"; // 로고 이미지 파일 경로
import LoginPage from "./components/LoginPage.js";

function App() {
  const [loggedInEmail, setLoggedInEmail] = useState(""); // 로그인한 이메일 상태

  useEffect(() => {
    // 로컬 스토리지에서 이메일을 읽어옴
    const email = localStorage.getItem("loggedInEmail");
    if (email) {
      setLoggedInEmail(email);
    }
  }, []);

  const handleLogin = (email) => {
    setLoggedInEmail(email); // 로그인한 이메일 설정
    localStorage.setItem("loggedInEmail", email); // 로컬 스토리지에 저장
    window.location.href = "/"; // 로그인 후 홈으로 리디렉션
  };

  const handleLogout = () => {
    setLoggedInEmail(""); // 로그인 상태 초기화
    localStorage.removeItem("loggedInEmail"); // 로컬 스토리지에서 제거
  };

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
            {loggedInEmail ? (
              <>
                <span className="nav-item">{loggedInEmail}</span> {/* 로그인한 이메일 표시 */}
                <button onClick={handleLogout} className="nav-item">로그아웃</button> {/* 로그아웃 버튼 */}
              </>
            ) : (
              <Link to="/login" className="nav-item">로그인</Link>
            )}
            <button className="material-symbols-outlined">menu</button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="navbar">
          <Link to="/" className="nav-item">레시피</Link>
          <Link to="/search" className="nav-item">검색</Link>
          <div className="nav-item">게시물</div>
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
