import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Navebar from "./component/Navebar";
import { Provider } from "react-redux";
import store from "./app/store";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
