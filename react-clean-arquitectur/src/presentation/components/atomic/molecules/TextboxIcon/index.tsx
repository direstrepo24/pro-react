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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const textboxClass = classNames('textboxIcon', {
    [`mak-textboxIcon--${color}`]: color,
  });

  return (
    <div className="textboxIcon-container">
      <div className="textboxIcon-line" />

      {icon && <div className="textbox-icon">{icon}</div>}

      <input
        type={type}
        className={textboxClass}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
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