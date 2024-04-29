// Textbox.tsx
import { ReactNode, useState } from 'react';
import './index.scss'
import classNames from 'classnames';

type TextboxColor = 'primary' | 'secondary' | 'third';

interface TextboxProps {
  label?: string;
  placeholder?: string;
  type?: string;
  color?: TextboxColor;
}

const Textbox: React.FC<TextboxProps> = ({
  label,
  placeholder,
  type = 'text',
  color = 'primary',
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const textboxClass = classNames('textbox', {
    [`mak-textbox--${color}`]: color,
  });

  return (
    <div className="textbox-container">
      <div className="textbox-line" />
      <input
        type={type}
        className={textboxClass}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {label && (
        <label className="textbox-label" htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Textbox;