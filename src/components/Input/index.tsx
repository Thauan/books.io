import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FloatLabel, InputLabel, InputTextField } from './style';

export interface InputProps {
  label: string;
  type?: string;
  name: string;
  rest?: any;
  value?: any;
  clear?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  value,
  clear,
  ...rest
}: any) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [inputRef, registerField]);

  const handleInputChange: any = (inputValue: any): any => {
    const inputText = inputValue;
    clear();
    return inputText;
  };

  return (
    <div>
      <FloatLabel>
        <InputTextField
          type={type}
          onChange={(e) => handleInputChange(e.target.value)}
          defaultValue={value}
          ref={inputRef}
          {...rest}
        />
        <InputLabel>{label}</InputLabel>
      </FloatLabel>
      {error && (
        <span style={{ color: '#fff', position: 'absolute' }}>{error}</span>
      )}
    </div>
  );
};

export default Input;
