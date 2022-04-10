import React from 'react';
import Greet from './Greet';

const CustomComponent: React.FC<React.ComponentProps<typeof Greet>> = ({ isLoggin, name, messageCount }) => (
  <div>
    Greet
    <h2>{isLoggin ? `welcome ${name}! u have ${messageCount} unread` : `welcome guest`}</h2>
  </div>
);

export default CustomComponent;
