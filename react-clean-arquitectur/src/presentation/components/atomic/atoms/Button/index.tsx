import { ReactNode } from 'react';
import './index.scss'
import classNames from 'classnames';

type BtnColor = 'primary' | 'secondary' | 'third'
 
export interface ButtonProps {
    color?: BtnColor;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}
const Button = ({ className, children, onClick,  color = 'primary', disabled = false,  }: Readonly<ButtonProps>) => {
    const btnClass = classNames(
        'btn',
        `btn--${color}`,
        className
    );
    return (
        <button
            disabled={disabled}
            className={btnClass}
            type="button"
            onClick={onClick}>
                {children}          
        </button>
    )
}
export default Button;