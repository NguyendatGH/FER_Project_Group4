import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-poppins rounded transition-colors duration-200 focus:outline-none focus:ring focus:ring-offset-2';
  
  const variants = {
    primary: 'btn btn-primary text-white',
    secondary: 'btn btn-secondary text-white',
    outline: `btn btn-outline-light ${disabled ? 'border-secondary text-secondary' : 'text-white hover:bg-white hover:text-dark'}`,
  };
  
  const sizes = {
    small: 'btn-sm px-3 py-1',
    medium: 'px-4 py-2',
    large: 'btn-lg px-6 py-3',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-100' : ''} 
    ${disabled ? 'disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;