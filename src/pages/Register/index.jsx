import React from 'react';
import { Box, Typography } from '@mui/material';

import FormRegister from '../../components/FormRegister';

function RegisterPage() {
    return (
        <Box
            sx={{
                background: 'url(https://id.ou.edu.vn/_loginform/images/bg.jpg) repeat',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    background: 'url(https://id.ou.edu.vn/_loginform/images/bg2.jpg) top center / 100% 100% ',
                    width: '320px',
                    minHeight: '90%',
                    p: 2,
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <Box>
                    <img alt="" src="https://id.ou.edu.vn/_loginform/images/logo.png" width="100%" />
                </Box>

                <Typography text-align="center" color="#fdd428" variant="h5" my={4}>
                    ĐĂNG NHẬP
                </Typography>
                <FormRegister />
            </Box>
        </Box>
    );
}

export default RegisterPage;
