import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Welcome from "./pages/user/welcome.jsx";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">

      </h1>
     <BrowserRouter>
           <Toaster position="top-right" />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
      <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
         <Route
          path="/welcome"
          element={<Welcome />}
        />
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App