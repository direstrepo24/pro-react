// CheckBox.tsx
import { useState } from 'react';
import './index.scss'
import classNames from 'classnames';

type TextboxColor = 'primary' | 'secondary' | 'third';

interface CheckBoxProps {
  label?: string;
  type?: string;
  color?: TextboxColor;
  checked?:boolean;
  onChange: (checked:boolean)=>void; 
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  color = 'primary',
  checked = false,
  onChange,

}) => {

  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);

    if (onChange) {
      onChange(newChecked);
    }

  };

  const checkboxClass = classNames('checkbox', {
    [`mak-checkbox--${color}`]: color,
  });

  return (
    <div className={checkboxClass} onClick={handleChange}>
      <div className="checkbox-icon"></div>
      {label && <label className="checkbox-label">{label}</label>}
    </div>
  );
};

export default CheckBox;