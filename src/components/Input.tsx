import { InputError } from '@/styled-components';
import { InputBaseProps, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';

const formValidation = (errors: FieldErrors | any, errorKey: string) => {
  return errors[errorKey] ? <InputError className="error-message">{errors[errorKey].message}</InputError> : '';
};

interface InputProps {
  required?: boolean;
  register: UseFormRegister<any>;
  name: string;
  errors?: FieldErrors;
  label?: string;
  type: InputType;
  inputProps?: InputBaseProps['inputProps'];
  disabled?: boolean;
  trigger?: UseFormTrigger<any>;
}

export enum InputType {
  NUMBER = 'number',
  PASSWORD = 'password',
  SEARCH = 'search',
  TEXT = 'text',
  HIDDEN = 'hidden',
  CHECKBOX = 'checkbox'
}

export const Input = ({ required = false, register, name, errors, label = '', type, inputProps, disabled = false, trigger }: InputProps) => {
  return (
    <div>
      <TextField
        required={required}
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        label={label}
        variant="outlined"
        {...register(name)}
        {...(inputProps && { inputProps: inputProps })}
        onChange={() => trigger?.()}
        fullWidth
        margin="none"
      />
      {errors && formValidation(errors, name)}
    </div>
  );
};
