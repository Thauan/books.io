import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FloatLabel, InputLabel, InputTextField } from './style';

export interface InputProps {
  label: string;
  type?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, type }: any) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [inputRef, registerField]);

  return (
    <FloatLabel>
      <InputTextField
        type={type}
        onChange={(e) => e.target.value}
        ref={inputRef}
        value="123"
      />
      <InputLabel>{label}</InputLabel>
    </FloatLabel>
  );
};

export default Input;
