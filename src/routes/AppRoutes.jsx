import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/landing/Home"
import Login from "../pages/auth/Login"
import Signup from "../pages/auth/Signup"
import  StudentDashboard  from "../pages/student/studentdashboard/StudentDashboard"
import ProtectedRoute from "../routes/ProtectedRoute"
import StudentProfile from "../pages/student/studentprofile/StudenttProfile"
import StudentLayout from "../components/layout/StudentLayout"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            

            <Route element={<ProtectedRoute />}>
                <Route path="/student" element={<StudentLayout />}>
                    <Route index element={<StudentDashboard />} />
                    <Route path="profile" element={<StudentProfile />}/>
                </Route>
            
            </Route>
            

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
    
}

export default AppRoutes