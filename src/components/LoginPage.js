import React, { useState } from "react";
import "../assets/css/LoginPage.css"; // 스타일 시트 임포트

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState(""); // 이메일 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태

  const handleLogin = (e) => {
    e.preventDefault(); // 기본 폼 제출 방지

    // 로그인 처리 (예시로만)
    if (email === "test@example.com" && password === "password") {
      alert("로그인 성공!");
      onLogin(email); // 로그인 성공 시 이메일 전달
    } else {
      // 로그인 실패 시 오류 메시지 설정
      setErrorMessage("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="login-page">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
