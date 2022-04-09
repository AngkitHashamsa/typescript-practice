import UserList from "./userList";
import users from "__mock__/users";
const Users: React.FC = () => (
  <div>
    <h2>List of users</h2>
    {users.map((user) => (
      <UserList key={user.id} user={user} />
    ))}
  </div>
);

export default Users;
