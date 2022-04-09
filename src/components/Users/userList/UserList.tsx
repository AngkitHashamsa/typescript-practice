interface Props {
  user: { userId: number; id: number; title: string; body: string };
}
const UserList: React.FC<Props> = ({ user }) => (
  <div>
    <h2>{user.title}</h2>
    <p>{user.body}</p>
  </div>
);

export default UserList;
