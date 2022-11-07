import React from 'react';
import { Box, Typography } from '@mui/material';

function Teacher({ name, course, color, gender }) {
    return (
        <Box color="#000" mb={2} border="1px solid #ccc" p={1}>
            <Box width="100%" display="flex" flexWrap="nowrap">
                Tên:{' '}
                <Typography
                    variant="p"
                    sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '68%' }}
                    color="#0f6fc5"
                    component="p"
                >
                    {name}
                </Typography>
            </Box>
            <Box width="100%" display="flex" flexWrap="nowrap">
                Giới tính:{' '}
                <Typography
                    variant="p"
                    sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '68%' }}
                    color="#0f6fc5"
                    component="p"
                >
                    {gender}
                </Typography>
            </Box>
            <Box width="100%" display="flex" flexWrap="nowrap">
                Môn học:{' '}
                <Typography
                    variant="p"
                    sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '68%' }}
                    color="#0f6fc5"
                    component="p"
                >
                    {course}
                </Typography>
            </Box>
            <Box display="flex" flexWrap="nowrap" alignItems="center">
                Màu:{' '}
                <Box
                    sx={{
                        ml: 1,
                        backgroundColor: color,
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                    }}
                ></Box>
            </Box>
        </Box>
    );
}

export default Teacher;
