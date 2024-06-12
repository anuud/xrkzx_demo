import React from 'react';
import type { ReactNode, FC } from 'react';
import { SerViceWrapper } from './styled';
import Caption from '../caption';
import { Input, Space } from 'antd';
import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const SerVce: FC<IProps> = () => {
  return (
    <SerViceWrapper>
      <div className="w-[70%] m-auto h-full">
        <Caption
          title="新航道国际学校"
          isSub="择校服务"
          subtitle="新航道国际学校入学服务全覆盖！"
        />
        <div className="w-[80%] mt-4  m-auto relative">
          <div className="w-[200px] h-[175px] cread1">
            <p className="text-center pt-[38%]" style={{ color: '#249ffd' }}>
              入学测试
            </p>
            <p className=" block w-[50%] m-auto mt-1">看看你的竞争力 有多强一测便知！</p>
          </div>
          <div className="w-[200px] h-[175px] cread2">
            <p className="text-center pt-[38%]" style={{ color: '#249ffd' }}>
              看校服务预约
            </p>
            <p className=" block w-[62%] m-auto mt-1">您关心的国际学校都在</p>
            <p className=" block w-[52%] m-auto mt-1">此， 新航道统一组织， 方便、快捷!</p>
          </div>
          <div className="w-[200px] h-[175px] cread3">
            <p className="text-center pt-[38%]" style={{ color: '#249ffd' }}>
              择校指南
            </p>
            <p className=" block w-[65%] m-auto mt-1">全新《2024大湾区国际</p>
            <p className=" block w-[55%] m-auto mt-1">学校择校攻略》全</p>
            <p className=" block w-[30%] m-auto mt-1">面升级</p>
          </div>
          <div className="w-[200px] h-[175px] cread5">
            <p className="text-center pt-[38%]" style={{ color: '#249ffd' }}>
              规划指导
            </p>
            <p className=" block w-[68%] m-auto mt-1 text-xs">
              一对一国际学校备考指导， 量身定制专属方案！
            </p>
          </div>
          <div className="w-[200px] h-[175px] cread4">
            <p className="text-center pt-[38%]" style={{ color: '#249ffd' }}>
              教育展
            </p>
            <p className=" block w-[68%] m-auto mt-1 text-xs">
              已举办了多届， 择校备考一对一 面谈，解惑！
            </p>
          </div>
        </div>
        <div className="w-[60%] ml-[20%] mt-[27%] h-[174px] item">
          <div className="w-[394px] f-item">
            <h1 className="text">免费领取</h1>
            <div className="w-[60%] m-auto">
              <Space>
                <Input
                  size="small"
                  placeholder="请输入姓名"
                  style={{ width: '120px' }}
                  prefix={<UserOutlined style={{ color: '#FC5D16' }} />}
                />
                <Input
                  size="small"
                  placeholder="请输入电话"
                  style={{ width: '120px' }}
                  prefix={<PhoneOutlined style={{ color: '#FC5D16' }} />}
                />
              </Space>
              <span className="submit">提交领取</span>
            </div>
          </div>
        </div>
      </div>
    </SerViceWrapper>
  );
};
export default SerVce;
