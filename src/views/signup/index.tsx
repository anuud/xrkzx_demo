import React from 'react';
import type { ReactNode, FC } from 'react';
import { SignupWrapper } from './styled';
import { Form, Input } from 'antd';
interface IProps {
  children?: ReactNode;
}
const Signup: FC<IProps> = () => {
  return (
    <SignupWrapper>
      <div className=" lg:w-[750px] m-auto xs:w-[375px]">
        <div className="flex justify-between">
          <a href="#">
            <img
              src={require('../../assets/images/1710834333725175.png')}
              alt=""
              className="xs:w-[120px] lg:w-[220px]"
            />
          </a>
          <a href="tel:181-8861-8942" target="_blank" rel="noopener noreferrer" className="image">
            181-8861-8942
          </a>
        </div>
        <img src={require('../../assets/images/baoming/y-ban3.jpg')} alt="" />
        <div className="signup-item">
          <Form>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </SignupWrapper>
  );
};
export default Signup;
