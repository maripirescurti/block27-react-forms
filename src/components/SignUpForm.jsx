import { useState } from "react"

export default function SignUpForm({ setToken }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    
    setError(null);
    setUsernameError(null);

    if (username.length < 8) {
      setUsernameError("Username must be at least 8 characters long.");
      return;
    }
    
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
      });

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        throw new Error(result.message || 'Sign up failed.')
      }

      setToken(result.token);

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p className="error-message">{error}</p>}
      {usernameError && <p className="error-message">{usernameError}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}