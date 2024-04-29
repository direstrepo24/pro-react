// ComboBox.tsx

import React from 'react';
import './index.scss' // Importar el archivo de estilo

interface ComboBoxProps {
  variant?: 'primary' | 'secondary' | 'tertiary'; // Parámetro para el estilo
  options?: string[]; // Opciones del ComboBox
  defaultValue?: string; // Valor predeterminado
}

const ComboBox: React.FC<ComboBoxProps> = ({ variant = 'primary', options = [], defaultValue = '' }) => {
  const comboboxClass = `combobox combobox-${variant}`; // Clase dinámica para aplicar el estilo

  return (
    <div className="combobox-container">
      <select className={comboboxClass} defaultValue={defaultValue}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
