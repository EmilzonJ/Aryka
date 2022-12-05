import * as React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker as MuiDateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {useController, useFormContext} from "react-hook-form";
import {InputBaseProps} from "@mui/material";
import {InputError} from "@/styled-components";

interface DateTimePickerProps {
  name: string;
  label: string;
  inputProps?: InputBaseProps['inputProps'];
}

export const DateTimePicker = ({name, label, inputProps}: DateTimePickerProps) => {
   const {control, setError} = useFormContext();
  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    control,
    rules: {required: true},
  });

  return (
    <div
      style={{
        marginTop: 12,
        marginBottom: 12
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDateTimePicker
          renderInput={(params) => <TextField {...params} error={!!error}/>}
          label={label}
          inputFormat={'DD/MM/YYYY hh:mm A'}
          value={field?.value || null}
          {...(inputProps && {inputProps: inputProps})}
          onChange={(value) => {
            if (dayjs(value).isValid()) {
              field.onChange(value?.toDate())
            } else {
              setError(name, {type: "manual", message: "La fecha es inválida"})
            }
          }}

        />
      </LocalizationProvider>
      <InputError className="error-message">{error?.message}</InputError>
    </div>
  );
}
