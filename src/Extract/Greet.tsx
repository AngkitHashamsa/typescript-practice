type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggin: boolean;
};

const Greet = ({ name, isLoggin, messageCount = 0 }: GreetProps) => {
  return (
    <div>
      Greet
      <h2>{isLoggin ? `welcome ${name}! u have ${messageCount} unread` : `welcome guest`}</h2>
    </div>
  );
};

export default Greet;
