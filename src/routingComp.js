import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import StudentLogin from "./studentLogin";
import AdminLogin from "./adminLogin";
import Dashboard from "./dashboard";
import StudentComponent from "./StudentComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import Profile from './profile';
import Fees from './Fees/Fees';
import View from './view';
import Navbar from './Componentcurd/Navbar';
import Home2 from './Componentcurd/home2';
import AddProduct from './Componentcurd/AddProduct';
import EditProduct from './Componentcurd/EditProduct';
import SignUp from './signup';
import Login from "./nikLogin";
import Course from './course';
import CourseRegistration from './courseRegistration';
import Feedback from "./Feedback";
import Navhome from "./navhome";
import Loginadmin from "./nikLoginadmin";
import Chart from "./piechart";
import Reduxcontact from "./newcontact";
import Micro from "./micro";
const RouteComponent = ()=>{
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Navhome/>}></Route>
            <Route path="/admin" element={<AdminLogin/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/registration" element={<StudentComponent/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/fees" element={<Fees/>}></Route>
            <Route path="/view" element={<View/>}></Route>
            <Route path="/SignUp" element={<SignUp/>}></Route>
            <Route path="/course" element={<Course/>}></Route>
            <Route path="/courseRegistration" element={<CourseRegistration/>}></Route>
            <Route path="/feedback" element={<Feedback/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/adminlogin" element={<Loginadmin/>}></Route>
            <Route path="/chart" element={<Chart/>}></Route>
            <Route path="/reduxcontact" element={<Reduxcontact/>}></Route>
            <Route path="/micro" element={<Micro/>}></Route>
            
            
            <Route path='/records' element={<>
                <Navbar/>
                <Home2/>
                </>}></Route>
           <Route path='/addProduct' element={<>
            <Navbar/>
            <AddProduct />
        </>}></Route>
           <Route path='/return' element={<>
            <Navbar/>
            <Home2 />
        </>}></Route>
           <Route path='/editProduct/:id' element={<>
            <Navbar/>
            <EditProduct />
        </>}></Route>
           
            </Routes>
        </Router>
    )
}
export default RouteComponent