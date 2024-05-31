import React from 'react';
import type { ReactNode, FC } from 'react';
import { AppFooterWrapper } from './styled';
import {
  EnvironmentOutlined,
  QqOutlined,
  WechatOutlined,
  PictureOutlined,
  PhoneOutlined
} from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const AppFooter: FC<IProps> = () => {
  return (
    <AppFooterWrapper>
      <div className="content wrap-v2">
        <div className="footer-info">
          <div className="logo">
            <img src={require('../../assets/images/1709718311230619.png')} alt="" />
          </div>
          <div className="text">
            <p>
              专注为大湾区幼小初高学生就读国际化学校，提供一对一咨询、探校、择校、备考、招生政策、入学考试等全流程服务。向日葵择校，立志帮湾区家长找到最合适的国际学校！
            </p>
          </div>
          <div className="icon">
            <QqOutlined style={{ color: '#888', fontSize: '16px' }} />
            <WechatOutlined style={{ color: '#888', fontSize: '16px', marginLeft: '15px' }} />
          </div>
        </div>
        <div className="footer-contact">
          <h4>联系我们</h4>
          <div className="address">
            <EnvironmentOutlined style={{ padding: '10px 5px' }} />
            <div>
              <p>我们的地址</p>
              <p>深圳市南山区大冲商务中心B座27层向日葵择校事业部</p>
            </div>
          </div>
          <div className="ipone">
            <p>
              <PhoneOutlined style={{ padding: '15px 5px' }} />
              181-8861-8942
            </p>
          </div>
          <div>
            <p>
              {' '}
              <PictureOutlined style={{ padding: '15px 5px' }} />
              xiangrikuizexiao@163.com
            </p>
          </div>
        </div>

        <div className="footer-ewm">
          <div className="image">
            <img
              src={require('../../assets/images/1709713942985442.jpg')}
              alt=""
              style={{ width: '80px', height: '80px' }}
            />
          </div>
          <div className="text">
            <p style={{ display: 'block', padding: '10px', marginTop: '20px' }}>扫码添加小葵老师</p>
            <p>获取国际教育规划一手信息</p>
            <img
              src={require('../../assets/images/footer10.png')}
              alt=""
              style={{ height: '20px', margin: '5px 1px 0' }}
            />
          </div>
        </div>
      </div>
    </AppFooterWrapper>
  );
};
export default AppFooter;
