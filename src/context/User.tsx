import { useUserContext } from "./UserContext";
const User = () => {
  const { user, setUser } = useUserContext();

  const handleLogin = () =>
    setUser({
      name: "Angkit",
      email: "hello",
    });
  const handleLogOut = () => setUser(null);

  return (
    <div>
      User
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>logout</button>
      <div>
        name is {user?.name} and email {user?.email}
      </div>
    </div>
  );
};

export default User;
