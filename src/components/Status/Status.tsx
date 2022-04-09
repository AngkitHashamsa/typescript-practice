import { Props } from "types/statusType";

const Status: React.FC<Props> = ({ status }) => {
  if (status === "loading") {
    return <div>Loading</div>;
  } else if (status === "error") {
    return <div>Error</div>;
  }
  return <div>Status</div>;
};

export default Status;
