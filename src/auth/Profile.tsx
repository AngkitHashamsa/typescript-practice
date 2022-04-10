export type ProfileProps = {
  name: string;
};

const Profile: React.FC<ProfileProps> = ({ name }) => {
  return (
    <div>
      <h2>Profile</h2>
      Hi {name}
    </div>
  );
};

export default Profile;
