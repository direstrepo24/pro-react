import { FC } from 'react';
import './index.scss'

 
export interface RadioButtonProps {
    id: string;
    isChecked?: boolean;
    onClick?: (id:string) => void;
    
}
const RadioButton:FC<RadioButtonProps> = ( { 
    id,
    isChecked=false,
    onClick
 }  ) => {

    const handleClick =() =>{
        if ( onClick ) onClick(id);
    }

    return (
        <div className='makers-radio'>

            <input 
                type="radio"
                checked={isChecked}
                className="makers-radio-input"
                onChange={handleClick}>      
            </input>

        </div>
    )
}
export default RadioButton;