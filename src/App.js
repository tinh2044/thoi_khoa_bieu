// Lấy thư viện
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PageDashboard, PageHome, PageRegister } from './pages';

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectorLessonsUser } from './redux/selector';

function App() {
    return (
        <Box width="100%" height="100%">
            {/* Hệ thông các trang */}
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/register" element={<PageRegister />} />
                <Route path="/dashboard" element={<PageDashboard />} />
            </Routes>

            {/* Cấu hình hiện thị thông báo */}
            <ToastContainer
                autoClose={2200}
                position="top-right"
                closeOnClick
                draggable={true}
                theme="colored"
                newestOnTop={true}
                draggablePercent={60}
            />
        </Box>
    );
}
// xuất function component ra cho các file khác dùng
export default App;
