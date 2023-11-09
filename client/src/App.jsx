import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message));
  }, []);

  return (
    <>
      <h2>Message from the backend: {message}</h2>
    </>
  );
}

export default App;
