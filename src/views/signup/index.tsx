import React from 'react';
import type { ReactNode, FC } from 'react';
import { SignupWrapper } from './styled';
import { Button, Form, Input, message } from 'antd';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSignupSchool } from './service/signup';
import { useAppDispatch } from '../../store';
interface IProps {
  children?: ReactNode;
}
type SignupData = {
  name: string;
  phone: number;
  grade: string;
  theacher?: string;
};
const fetchDataAsync = createAsyncThunk('fetchdata', async (Applaydata: SignupData) => {
  try {
    const data = await getSignupSchool(Applaydata);
    return data;
  } catch (error) {
    return error;
  }
});
const Signup: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const changbtnfrom = (e: any) => {
    const { name, phone, grade, theacher } = e;
    dispatch(fetchDataAsync({ name, phone, grade, theacher }));
    messageApi.open({
      type: 'success',
      content: '提交成功',
      className: 'custom-class',
      style: {
        marginTop: '20vh'
      }
    });
    form.resetFields();
  };

  const validateMobile = (rule: any, value: any) => {
    const mobileRegex = /^1[3-9]\d{9}$/;
    if (!value) {
      return Promise.reject('请输入手机号码');
    } else if (!mobileRegex.test(value)) {
      return Promise.reject('手机号码格式不正确');
    }
    return Promise.resolve();
  };
  const validateGrade = (rule: any, value: any) => {
    const mobileRegex = /^(一|二|三|四|五|六|七|八|九|高[一|二|三])年级$/;
    if (!value) {
      return Promise.reject('请输入年级（一到九年级、高一到高三年级）');
    } else if (!mobileRegex.test(value)) {
      return Promise.reject('年级格式不正确');
    }
    return Promise.resolve();
  };
  return (
    <SignupWrapper>
      {contextHolder}
      <div className=" lg:w-[750px] m-auto xs:w-[375px] bg-white">
        {/* <div className="flex justify-between">
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
        </div> */}
        <img src={require('../../assets/images/signup.png')} alt="" />
        <div className="signup-item bg-gray-300 p-4">
          <h1 className=" leading-9 text-center text-xl p-4">立即报名国际学校择校展</h1>
          <Form form={form} onFinish={(e) => changbtnfrom(e)}>
            <Form.Item name="name" rules={[{ required: true, message: '请输入学生姓名' }]}>
              <Input placeholder="学生姓名" style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item name="phone" rules={[{ required: true, validator: validateMobile }]}>
              <Input placeholder="手机联系号码" style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item name="grade" rules={[{ required: true, validator: validateGrade }]}>
              <Input placeholder="在读年级" style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item name="theacher">
              <Input
                placeholder="填写邀请老师的名字，如果没有老师邀请的可以不填 ！"
                style={{ height: '50px' }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                style={{ backgroundColor: '#fe6700', width: '100%', color: '#fff', height: '50px' }}
              >
                立即提交
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="h-[830px] signup-bg">
          <img src={require('../../assets/images/20240731154606.jpg')} />
        </div>
        {/* <div className="h-[830px] signup-bg">
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
        </div> */}
        {/* <div>
          <h3 className="text-xl font-bold text-center pt-4">择校我们是认真的</h3>
          <h4 className="text-center text-sm py-1">累计以帮助10000+位学生进入目标学校</h4>
          <img src={require('../../assets/images/baoming/dibu.jpg')} alt="" />
        </div> */}
        {/* <div className="footer">
          <ul className="flex justify-center text-gray-400">
            <li className="p-1">择校计划 |</li>
            <li className="p-1">国际学校 |</li>
            <li className="p-1">联系我们</li>
          </ul>
          <div className="text-center text-gray-400">向日葵择校平台</div>
        </div> */}
      </div>
    </SignupWrapper>
  );
};
export default Signup;
