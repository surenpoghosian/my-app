import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { About } from "../../Pages/About/About";
import { Contacts } from "../../Pages/Contacts/Contacts";
import { Home } from "../../Pages/Home/Home";
import { Projects } from "../../Pages/Projects/Projects";

export function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="projects" element={<Projects />} />
            <Route path="/about" element={<About/>} />
            <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
  
    )
}