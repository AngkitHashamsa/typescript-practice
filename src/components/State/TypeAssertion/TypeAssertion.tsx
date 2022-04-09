import { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => setUser({ name: "angkit", email: "eng@gmail.com" });

  return (
    <div>
      <h2>User</h2>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;
