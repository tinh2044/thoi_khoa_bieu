import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectorColors } from '../../redux/selector';

function ChooseColor({ handleOnChange, defaultColor }) {
    const listColor = useSelector(selectorColors);
    const [showMenu, setShowMenu] = useState(false);
    const [color, setColor] = useColor('hex', defaultColor || '#121212');
    const handleChooseColor = (color) => {
        const payload = {};
        payload.target = {};

        payload.target.name = 'color';
        payload.target.value = color.hex;

        handleOnChange(payload);
    };
    const handleChangeColor = ({ ...props }) => {
        if (listColor.includes(props.hex)) {
            toast.error('Màu này đã có người chọn rồi');
        }
        setColor(props);
    };
    return (
        <Box position="relative" mb={2} display="flex" justifyContent="space-between">
            <Button color="success" variant="contained" onClick={() => setShowMenu(!showMenu)}>
                Chọn màu
            </Button>

            {showMenu && (
                <Box position="absolute" top="-310px" left="-0px" zIndex={2} boxShadow={1} borderRadius={2}>
                    <ColorPicker
                        width={250}
                        height={128}
                        onChangeComplete={handleChooseColor}
                        color={color}
                        onChange={handleChangeColor}
                        hideHSV
                        hideRGB
                        alpha
                    />
                </Box>
            )}

            <Box bgcolor={color.hex} width="45%" borderRadius="12px"></Box>
        </Box>
    );
}

export default ChooseColor;
