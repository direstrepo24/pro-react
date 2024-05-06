// Textbox.tsx
import { ReactNode, useState } from 'react';
import './index.scss'
import classNames from 'classnames';

type TextboxColor = 'primary' | 'secondary' | 'third';

interface TextboxIconProps {
  label?: string;
  placeholder?: string;
  type?: string;
  color?: TextboxColor;
  icon?: ReactNode;
}

const TextboxIcon: React.FC<TextboxIconProps> = ({
  label,
  placeholder,
  type = 'text',
  color = 'primary',
  icon 
}) => {
  const [value, setValue] = useState('');
  
  const [colorLine, setLineColor] = useState('primary');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>)=> {
      const value = e.target.value;
      const colorVal = (value === null || value === undefined || value=="") ? "error" : "success";

      setLineColor(colorVal);
  }

  const lineClass = classNames( 'textboxIcon-line',{
    [`textboxIcon-line--${colorLine}`]: colorLine,
  });

  const textboxClass = classNames('textboxIcon', {
    [`mak-textboxIcon--${color}`]: color,
  });
  
  return (
    <div className="textboxIcon-container">
      <div className={lineClass} />

      {icon && <div className="textbox-icon">{icon}</div>}

      <input
        type={type}
        className={textboxClass}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleFocus}
      />
      {label && (
        <label className="textboxIcon-label" htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default TextboxIcon;