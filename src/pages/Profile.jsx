import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/user/Profile.css";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log("Profile component rendered, user:", user);

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      logout();
      navigate("/");
      alert("Đã đăng xuất thành công! Bạn có thể đăng ký tài khoản khác.");
    }
  };

  if (!user) {
    console.log("No user found, redirecting to signin");
    navigate("/signin");
    return (
      <div style={{ padding: "120px 20px", textAlign: "center" }}>
        <h1>Redirecting to signin...</h1>
      </div>
    );
  }

  return (
    <div
      className="profile-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        visibility: "visible",
        opacity: 1,
      }}
    >
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.firstName
              ? user.firstName.charAt(0).toUpperCase()
              : user.email.charAt(0).toUpperCase()}
          </div>
          <h1 className="profile-title">Thông tin tài khoản</h1>
        </div>

        <div className="profile-info">
          <div className="info-group">
            <label>Họ và tên:</label>
            <span>
              {user.firstName && user.lastName
                ? `${user.firstName} ${user.lastName}`
                : "Chưa cập nhật"}
            </span>
          </div>

          <div className="info-group">
            <label>Email:</label>
            <span>{user.email}</span>
          </div>

          {user.phone && (
            <div className="info-group">
              <label>Số điện thoại:</label>
              <span>{user.phone}</span>
            </div>
          )}

          <div className="info-group">
            <label>Ngày tham gia:</label>
            <span>
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString("vi-VN")
                : "Chưa có thông tin"}
            </span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-primary" onClick={() => navigate("/")}>
            Về trang chủ
          </button>

          <button className="btn-secondary" onClick={() => navigate("/signup")}>
            Đăng ký tài khoản khác
          </button>

          <button className="btn-danger" onClick={handleLogout}>
            Đăng xuất
          </button>
        </div>

        <div className="profile-note">
          <p>
            💡 <strong>Lưu ý:</strong> Sau khi đăng xuất, bạn có thể đăng ký tài
            khoản mới hoặc đăng nhập với tài khoản khác.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
