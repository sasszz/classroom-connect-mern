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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainArea from "./pages/MainArea";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/classroom" element={<MainArea />} />
      <Route path="/error" element={<NotFound />} />
      <Route path="/video" element={<MeetingApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
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
