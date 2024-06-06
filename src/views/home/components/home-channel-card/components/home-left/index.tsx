import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeLeftWrapper } from './styled';
import { FieldTimeOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const HomeLeft: FC<IProps> = () => {
  return (
    <HomeLeftWrapper>
      <div className="h-full">
        <div className="channel-time-tit">
          <FieldTimeOutlined style={{ marginRight: '4px', fontSize: '18px' }} />
          国际学校报考时间
        </div>
        <div className="channel-time-cnt">
          <div className="channel-time-list">
            <b>国际小学（可少量插班）</b>
            <p>报名时间: 4-5月政策发布，提交申请材料</p>
            <p>录取时间: 6-7月公布录取结果自行到校报到</p>
          </div>
          <div className="channel-time-list">
            <b>国际初中（可少量插班）</b>
            <p>报名时间: 4-5月政策发布，提交申请材料</p>
            <p>录取时间: 6-7月公布录取结果自行到校报到</p>
          </div>
          <div className="channel-time-list">
            <b>国际高中（全年均可插班）</b>
            <p>报名时间: 6-7月报名最高峰, 学校为自主招生</p>
            <p>录取时间: 6-7月公布录取结果自行到校报到</p>
          </div>
          <div className="channel-time-list">
            <b>国际幼儿园</b>
            <p>报名时间: 1-12月全年均可咨询入学</p>
          </div>
        </div>
        <div className="channel-read">
          <div
            className="text-sm font-bold text-center"
            style={{ color: '#0e5886', margin: '3px auto 13px' }}
          >
            高校报考必读
          </div>
          <div className="text-xs">
            <p style={{ color: '#0e5886' }} className="mb-2">
              AP课程
            </p>
            <ul className="clearfix flex flex-wrap text-center">
              <li className="w-[47%] p-2 m-1 bg-white rounded-md">
                <span style={{ color: '#0e5886' }}>IB课程</span>
              </li>
              <li className="w-[47%] p-2 m-1  bg-white rounded-md">
                <span style={{ color: '#0e5886' }}>香港DSE</span>
              </li>
              <li className="w-[47%] p-2 m-1 bg-white rounded-md">
                <span style={{ color: '#0e5886' }}>DSSD课程</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomeLeftWrapper>
  );
};
export default HomeLeft;
