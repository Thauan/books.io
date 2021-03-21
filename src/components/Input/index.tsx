import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FloatLabel, InputLabel, InputTextField } from './style';

export interface InputProps {
  label: string;
  type?: string;
  name: string;
  rest?: any;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  value,
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

  return (
    <div>
      <FloatLabel>
        <InputTextField
          type={type}
          onChange={(e) => e.target.value}
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
