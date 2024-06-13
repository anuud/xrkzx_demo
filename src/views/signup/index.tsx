import React from 'react';
import type { ReactNode, FC } from 'react';
import { SignupWrapper } from './styled';
import { Button, Form, Input } from 'antd';
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
              className="xs:w-[120px] lg:w-[220px] xs:py-3"
            />
          </a>
          <a href="tel:181-8861-8942" target="_blank" rel="noopener noreferrer" className="image">
            181-8861-8942
          </a>
        </div>
        <img src={require('../../assets/images/baoming/y-ban3.jpg')} alt="" />
        <div className="signup-item bg-gray-300 p-4">
          <h1 className=" leading-9 text-center text-xl p-4">立即报名国际学校择校展</h1>
          <Form>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="学生姓名" style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item
              name="cellphone"
              rules={[{ required: true, message: 'Please input your mobile phone!' }]}
            >
              <Input placeholder="手机联系号码" style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item
              name="grade"
              rules={[{ required: true, message: 'Please input your grade' }]}
            >
              <Input placeholder="在读年级" style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                style={{ backgroundColor: '#fe6700', width: '100%', color: '#fff' }}
              >
                立即提交
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="h-[830px] signup-bg">
          <h3 className="text-center text-xl font-bold py-3">向日葵择校介绍</h3>
          <h4 className="text-sm text-gray-300 text-center">关于向日葵择校平台</h4>
          <img src={require('../../assets/images/baoming/jieshao.png')} alt="" className="py-2" />
          <div>
            <img
              src={require('../../assets/images/1710834333725175.png')}
              alt=""
              className="m-auto w-[137px] h-[40px]"
            />
            <h3 className="text-center text-xl font-bold">专注国际学校升学择校规划平台</h3>
          </div>
          <div>
            <div className="w-[110px] h-[110px] m-auto py-3">
              <img src={require('../../assets/images/baoming/xrkzx.jpg')} alt="" />
              <p className="text-center">关注公众号</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center pt-4">择校我们是认真的</h3>
          <h4 className="text-center text-sm py-1">累计以帮助10000+位学生进入目标学校</h4>
          <img src={require('../../assets/images/baoming/dibu.jpg')} alt="" />
        </div>
        <div className="footer">
          <ul className="flex justify-center text-gray-400">
            <li className="p-1">择校计划 |</li>
            <li className="p-1">国际学校 |</li>
            <li className="p-1">联系我们</li>
          </ul>
          <div className="text-center text-gray-400">向日葵择校平台</div>
        </div>
      </div>
    </SignupWrapper>
  );
};
export default Signup;
