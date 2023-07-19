import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    const storedBackgroundColor = localStorage.getItem('backgroundColor');
    const storedPrimaryColor = localStorage.getItem('primaryColor');
    const storedSecondaryColor = localStorage.getItem('secondaryColor');
    const storedTextColor = localStorage.getItem('textColor');
    const storedFontSize = localStorage.getItem('fontSize');

    if (storedBackgroundColor) setBackgroundColor(storedBackgroundColor);
    if (storedPrimaryColor) setPrimaryColor(storedPrimaryColor);
    if (storedSecondaryColor) setSecondaryColor(storedSecondaryColor);
    if (storedTextColor) setTextColor(storedTextColor);
    if (storedFontSize) setFontSize(storedFontSize);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', backgroundColor);
    root.style.setProperty('--primary-color', primaryColor);
    root.style.setProperty('--secondary-color', secondaryColor);
    root.style.setProperty('--text-color', textColor);
    root.style.setProperty('--font-size', `${fontSize}px`);

    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('primaryColor', primaryColor);
    localStorage.setItem('secondaryColor', secondaryColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('fontSize', fontSize);
  }, [backgroundColor, primaryColor, secondaryColor, textColor, fontSize]);

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div>
        <label htmlFor="background-color">Background Color:</label>
        <input
          type="color"
          id="background-color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="primary-color">Primary Color:</label>
        <input
          type="color"
          id="primary-color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="secondary-color">Secondary Color:</label>
        <input
          type="color"
          id="secondary-color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text-color">Text Color:</label>
        <input
          type="color"
          id="text-color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="font-size">Font Size:</label>
        <input
          type="number"
          id="font-size"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Settings;

