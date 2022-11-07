import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

function SelectValue({ data, label, handleOnChange, name, defaultValue = '' }) {
    const [value, setValue] = useState('');

    const handleSelectChange = (e) => {
        setValue(e.target.value);
        handleOnChange(e);
    };
    return (
        <Box backgroundColor="#fff" borderRadius="4px" width="100%" mb={2}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>

                <Select name={name} label={label} value={value || defaultValue} onChange={handleSelectChange}>
                    {data.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectValue;
