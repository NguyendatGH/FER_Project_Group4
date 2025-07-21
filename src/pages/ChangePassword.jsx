import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/auth/ChangePassword.css';

const ChangePassword = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  console.log('ChangePassword component rendered, user:', user);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Vui lòng nhập mật khẩu hiện tại';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'Vui lòng nhập mật khẩu mới';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Mật khẩu mới phải có ít nhất 6 ký tự';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu mới';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Đổi mật khẩu thành công!');
      navigate('/profile');
    } catch (error) {
      alert('Có lỗi xảy ra khi đổi mật khẩu. Vui lòng thử lại!');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    console.log('No user found, redirecting to signin');
    navigate('/signin');
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h1>Redirecting to signin...</h1>
      </div>
    );
  }

  return (
    <div className="change-password-container" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
      <div className="change-password-card">
        <div className="change-password-header">
          <h1>Đổi mật khẩu</h1>
          <p>Vui lòng nhập thông tin để đổi mật khẩu của bạn</p>
        </div>

        <form onSubmit={handleSubmit} className="change-password-form">
          <div className="form-group">
            <label htmlFor="currentPassword">Mật khẩu hiện tại</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className={errors.currentPassword ? 'error' : ''}
              placeholder="Nhập mật khẩu hiện tại"
            />
            {errors.currentPassword && (
              <span className="error-message">{errors.currentPassword}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">Mật khẩu mới</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className={errors.newPassword ? 'error' : ''}
              placeholder="Nhập mật khẩu mới"
            />
            {errors.newPassword && (
              <span className="error-message">{errors.newPassword}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Nhập lại mật khẩu mới"
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/profile')}
              className="btn-secondary"
              disabled={isLoading}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
            </button>
          </div>
        </form>

        <div className="password-requirements">
          <h3>Yêu cầu mật khẩu:</h3>
          <ul>
            <li>Ít nhất 6 ký tự</li>
            <li>Nên bao gồm chữ hoa, chữ thường và số</li>
            <li>Không nên sử dụng thông tin cá nhân</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword; 