import { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => setUser({ name: "angkit", email: "eng@gmail.com" });
  const handleLogout = () => setUser(null);

  return (
    <div>
      <h2>User</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;
