import React from 'react';
import type { ReactNode, FC } from 'react';
interface IProps {
  children?: ReactNode;
}
const Message: FC<IProps> = () => {
  return <div>Message</div>;
};
export default Message;
