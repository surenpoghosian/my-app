import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { About } from "../../Components/About/About";
import { Contacts } from "../../Components/Contacts/Contacts";
import { Home } from "../../Components/Home/Home";

export function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
  
    )
}