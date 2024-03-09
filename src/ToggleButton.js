// ToggleButton.js
import React from 'react';

const ToggleButton = ({ theme, onToggle }) => {
  return (
    <div className="flex justify-end p-4">
      <label className="switch">
        <input type="checkbox" onChange={onToggle} checked={theme === 'dark-theme'} />
        <span className="slider round"></span>
      </label>
      <span className="ml-2"></span>
    </div>
  );
};

export default ToggleButton;
