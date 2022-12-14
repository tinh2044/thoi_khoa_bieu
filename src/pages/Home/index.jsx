import React from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import FormLogin from '../../components/FormLogin';

function HomePage() {
    return (
        <Box
            // Css
            position="relative"
            width="100%"
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            py={2}
        >
            {/* Background */}
            <Box
                sx={{
                    // Overwrite Css of library

                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'url(https://lms.ou.edu.vn/221/login/Login_v12/images/img-01.jpg)',
                    zIndex: -1,
                }}
            >
                <Box
                    sx={{
                        opacity: 0.9,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient( to bottom, #005bea, #00c6fb)',
                    }}
                ></Box>
            </Box>
            {/* Logo */}
            <Box zIndex={0}>
                <img
                    src="https://lms.ou.edu.vn/221/login/Login_v12/images/logo-white.png"
                    alt="logo"
                    loading="lazy"
                    width="220px"
                />
            </Box>
            {/* Main */}
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                <Typography variant="h5" color="white" fontWeight="bold">
                    HCMCOU LMS 221
                </Typography>
                {/* Logo Title */}
                <Box
                    sx={{
                        backgroundColor: '#ffff00',
                        color: '#336699',
                        p: 1,
                        borderRadius: '4px',
                        width: '390px',
                        mb: 2,
                    }}
                >
                    <Typography color="inherit" variant="h3" fontSize="24px" align="center" fontWeight="bold">
                        ?????I H???C CH??NH QUY - H???c k??? 1 n??m h???c 2022-2023 (221)
                    </Typography>
                </Box>

                {/* Description Web */}
                <Box p={2}>
                    <Typography align="center" fontWeight="100" width="390px" variant="h6" color="yellow">
                        ????y l?? web d??nh cho gi??o vi??n tr?????ng ?????i h???c M??? ?????t th???i kh??a bi???u d???y b?? trong tu???n
                    </Typography>
                    <Typography align="center" fontWeight="100" width="390px" variant="h6" color="yellow">
                        M???i qu?? th???y/c?? ????ng nh???p ????? ?????t th???i kh??a bi???u
                    </Typography>
                </Box>

                {/* Form Login */}
                <FormLogin />

                {/* Button Register */}
                <Link to="/register">
                    <ButtonBase
                        variant="contained"
                        sx={{
                            width: '390px',
                            borderRadius: '24px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 2,
                            background: '#00C851',
                            transition: 'all 0.4s linear',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 'bold',

                            '&:hover': {
                                background: 'linear-gradient( to right, #005bea, #00c6fb)',
                            },
                        }}
                    >
                        N???u ch??a c?? t??i kho???n vui l??ng ????ng k??
                    </ButtonBase>
                </Link>
            </Box>
        </Box>
    );
}

export default HomePage;
