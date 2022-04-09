import { useState } from "react";
const Login: React.FC = () => {
  // * set state type => React.Dispatch<React.SetStateAction<boolean>>
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  return (
    <div>
      <h2>{loggedIn ? "logout" : "login"}</h2>

      {loggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
