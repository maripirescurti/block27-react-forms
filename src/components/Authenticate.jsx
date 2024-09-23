import { useState } from "react";


export default function Authenticate ({ token, setUsername }) {
  
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    if (!token) {
      setError("No token provided.");
      return;
    }
    
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Authentication failed.');
      }

      setError(null);
      setSuccessMessage(result.message);
      setUsername(result.data.username);


    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  )
}