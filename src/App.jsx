import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  async function handleClick() {
    const response = await fetch("/api/hello");
    const resData = await response.json();
    setMessage(resData.message);
  }

  return (
    <div>
      <h1>This is a fullstack dummy app</h1>
      <h2>Using it to learn some DevOps</h2>
      <h3>Let's stay in touch!</h3>
      <button onClick={handleClick}>Get the message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
