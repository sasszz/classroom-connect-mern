// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MeetingApp from "./components/meeting_app/MeetingApp";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Profile from "./pages/Profile";
import Trivia from "./pages/Trivia";
import Classroom from "./pages/Classroom";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/trivia" element={<Trivia />} />
      <Route path="/video" element={<MeetingApp />} />
      <Route path="/classroom" element={<Classroom />} />
      <Route element={<ProtectedRoutes />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
