import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useEffect, useState} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  }
};

interface MultipleSelectItem {
  id: string;
  name: string;
}

interface MultipleSelectProps {
  label: string;
  data: MultipleSelectItem[]
  onChange: (value: string[]) => void
  defaultValues?: string[]
}

export const MultipleSelect = ({label, data, onChange, defaultValues}: MultipleSelectProps) => {
  const [itemName, setItemName] = useState<string[]>([]);

  useEffect(() => {
    if (defaultValues) {
      setItemName(defaultValues);
    }
  }, [defaultValues])

  const handleChange = (event: SelectChangeEvent<typeof itemName>) => {
    const {
      target: {value: values},
    } = event;
    setItemName(
      typeof values === 'string' ? values.split(',') : values,
    );
    onChange(values as string[]);
  };

  return (
    <div>
      <FormControl sx={{
        width: "100%"
      }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={itemName}
          onChange={handleChange}
          input={<OutlinedInput label={label}/>}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {data.map(({id, name}) => (
            <MenuItem id={id} key={id} value={name}>
              <Checkbox checked={itemName.indexOf(name) > -1}/>
              <ListItemText primary={name}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
