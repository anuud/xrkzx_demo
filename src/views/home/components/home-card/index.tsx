import React, { useState } from 'react';
import type { ReactNode, FC } from 'react';
import { HomeCardWrapper } from './styled';
import { Modal } from 'antd';
import ChannelTit from '../../../../components/channel-tit';
import { useNavigate } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}
const info = [
  {
    name: '国际高中',
    icon: 'HomeOutlined',
    url: '/academy',
    color: '#f9ae75',
    src: require('../../../../assets/images/home/school.png')
  },
  {
    name: '择校指导',
    icon: 'RocketOutlined',
    color: '#f9ae75',
    src: require('../../../../assets/images/home/zhidao.png')
  },
  {
    name: 'A-Level课程',
    icon: 'RocketOutlined',
    url: '/school',
    color: '#f9ae75',
    src: require('../../../../assets/images/home/A-level.png')
  },
  {
    name: '香港DSE课程',
    icon: 'RocketOutlined',
    url: '/school',
    color: '#6850f3',
    src: require('../../../../assets/images/home/DSE.png')
  },
  {
    name: '备考规划',
    icon: 'RocketOutlined',
    color: '#f9ae75',
    src: require('../../../../assets/images/home/jihua.png')
  }
];
const HomeCard: FC<IProps> = () => {
  const [visible, setVisible] = useState(false);
  const navgite = useNavigate();

  const handleOk = () => {
    // 处理确认逻辑
    setVisible(false);
  };

  const handleCancel = () => {
    // 处理取消逻辑
    setVisible(false);
  };

  function ficheElm(item: any) {
    if (item.url) {
      return (
        <div onClick={() => navgite(item?.url)}>
          <div className="flex justify-center">
            <img src={item.src} alt="" style={{ width: '60px', height: '50px' }} />
          </div>
          <p className="pb-1">{item.name}</p>
        </div>
      );
    } else {
      return (
        <div onClick={() => setVisible(true)}>
          <div className="flex justify-center">
            <img src={item.src} alt="" style={{ width: '60px', height: '50px' }} />
          </div>
          <p className="pb-1">{item.name}</p>
        </div>
      );
    }
  }

  return (
    <HomeCardWrapper>
      <ChannelTit text="国际教育" />
      <div className="mt-5">
        <ul className="clearfix flex flex-wrap">
          {info.map((item) => {
            return <li key={item.name}>{ficheElm(item)}</li>;
          })}
        </ul>
      </div>
      <div className="content my-8">
        <ul className="flex">
          <li>
            <div className="item1">英语能力提升</div>
            <div className="hp">
              <p> 留学预备(一级/二级/三级/四级)</p>
              <p> 剑桥英语</p>
              <p> 英语口语(日常口语/面试口语 )</p>
              <p> 英语基础(语法/词汇/语音语调/精听精读)</p>
            </div>
            <a onClick={() => setVisible(true)}>获取备考计划</a>
          </li>
          <li>
            <div className="item2">语言考试类培训</div>
            <div className="hp">
              <p> 雅思/托褔/PTE/多邻国/普思</p>
              <p> SAT/GRE/GMAT/TOEFL Junior/SSAT/AEAS</p>
              <p> 国际学校入学备考考试(英语/数学)</p>
            </div>
            <a onClick={() => setVisible(true)}>获取备考计划</a>
          </li>
          <li>
            <div className="item3">国内考试类培训</div>
            <div className="hp">
              <p className="text-center"> 大学英语四级</p>
              <p className="text-center"> 大学英语六级</p>
              <p className="text-center"> BEC商务英语</p>
            </div>
            <a onClick={() => setVisible(true)}>获取备考计划</a>
          </li>
          <li>
            <div className="item4">国际课程体系培训</div>
            <div className="hp">
              <p> IGCSE:英语(ESL/EFL)/数学/附加数学/物理/化学/生物计算机/会计······</p>
              <p> A-Level:数学/进阶数学/物理/化学/生物/计算机/会计/经济/商务/英语······</p>
              <p> DSE:语文/数学/英语/公民与社会发展/数学延伸/物理/化学/生物/地理/经济</p>
              <p>AP:微积分AB/微积分BC/统计学/物理/化学/生物/心理学/ 美国历史</p>
            </div>
            <a onClick={() => setVisible(true)}>获取备考计划</a>
          </li>
        </ul>
      </div>
      <Modal
        title="请添加小葵微信进行咨询哦"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // 取消默认的确认和取消按钮
      >
        <img src={require('../../../../assets/images/xiaokui.jpg')} />
      </Modal>
    </HomeCardWrapper>
  );
};
export default HomeCard;
