// ThemeToggle.js
import React, { useState } from 'react';

const ThemeToggle = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
