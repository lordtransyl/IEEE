// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import AbstractForm from "./pages/AbstractForm";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsub;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-abstract" element={<AbstractForm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={user ? <AdminPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
