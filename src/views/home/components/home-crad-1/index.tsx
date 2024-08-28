import React, { useState } from 'react';
import type { ReactNode, FC } from 'react';
import { HomeCrad1Wrapper } from './styled';
import { HomeCard1 } from '../../../../assets/data/home-crad1';
import { Modal } from 'antd';
interface IProps {
  children?: ReactNode;
}
const HomeCrad1: FC<IProps> = () => {
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    // 处理确认逻辑
    setVisible(false);
  };

  const handleCancel = () => {
    // 处理取消逻辑
    setVisible(false);
  };

  return (
    <HomeCrad1Wrapper>
      <div className="xl:w-4/5 m-auto mt-7 bg-white item">
        <div className="flex justify-between ">
          {HomeCard1?.map((item) => {
            return (
              <div className="mb-4 text-center" key={item._id}>
                <img src={item.image_url} />
                <div className="ml-2">{item.text}</div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          <div className="flex-1 crad-left m-4">
            <h4 className="text-base font-bold p-2 xs:text-center">入学诊断</h4>
            <p className="p-2 text-blue-400 text-center">
              有哪些国际化学校？需要什么入学条件？快速找到适合孩子的学校
            </p>
          </div>
          <div className="flex-1 crad-right m-4 ">
            <h4 className="xl:text-base font-bold p-2 xs:text-center">学校大全</h4>
            <p className="p-2 text-blue-400 text-center">
              汇集各区国际高中、初中、小学、幼儿园等100+所学校
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-8">
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={require('../../../../assets/images/home/14d6296df26b19663c4c6fa3a59d1dd9dd44ba42.png')}
                alt=""
              />
            </div>
            <h5 className="text-sm font-bold p-2">名校榜单</h5>
            <span>TOP10 | 热门学校</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={require('../../../../assets/images/home/3e89f98864ccc3648065480a26c453d6d77941ec.png')}
                alt=""
              />
            </div>
            <h5 className="text-sm font-bold p-2">向日葵探校</h5>
            <span>打卡校园 | 一探究竟</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={require('../../../../assets/images/home/b925958892bb265c885d162b339237df9380cddc.png')}
                alt=""
              />
            </div>
            <h5 className="text-sm font-bold p-2">校园看点</h5>
            <span>学生社团 | 升学毕业</span>
          </div>
        </div>
        <div className="w-[100%] m-auto h-[500px] home-help">
          <button
            className="absolute p-3 cursor-pointer bg-red-700 rounded-md lg:left-[43%] xs:left-[35%] text-white font-bold text-xl bottom-[22%]"
            onClick={() => setVisible(true)}
          >
            立即帮我找学校
          </button>
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
      </div>
    </HomeCrad1Wrapper>
  );
};
export default HomeCrad1;
