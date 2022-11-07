import { Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectorListRoom } from '../../redux/selector';

function ButtonPagination({ setRoom }) {
    const listRoom = useSelector(selectorListRoom);
    // xác định phòng đang hiện thị
    const [active, setActive] = useState(0);
    const handleClick = (index, room) => {
        // Hiện thị thông báo khi giáo viên xem phòng khác
        toast.info(`Bạn đăng xem thời khóa biểu của phòng ${index + 1}`, { autoClose: 1500 });
        // cập nhật lại phòng và vị trí phòng đang xem
        setActive(index);
        setRoom(room);
    };
    return (
        <ButtonGroup display="flex" fullWidth>
            {listRoom.map((room, index) => (
                <Button
                    key={room}
                    variant={active === index ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => handleClick(index, room)}
                >
                    {`Phòng ${index + 1}`}
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default ButtonPagination;
