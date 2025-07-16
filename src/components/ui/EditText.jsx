import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  rightImage = null,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const inputClasses = `
    form-control
    font-poppins
    ${disabled ? 'disabled opacity-50' : ''}
    border-light
    rounded
    py-3 px-4
    ${rightImage ? 'pe-5' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="position-relative w-100">
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        style={{ fontSize: '16px', lineHeight: '24px' }}
        {...props}
      />
      {rightImage && (
        <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
          <img 
            src={rightImage.src} 
            alt="input icon" 
            style={{ width: `${rightImage.width}px`, height: `${rightImage.height}px` }}
            className="cursor-pointer"
            onMouseOver={(e) => e.target.style.opacity = '0.8'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          />
        </div>
      )}
    </div>
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  rightImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  className: PropTypes.string,
};

export default EditText;