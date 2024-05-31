import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeAboutRightWrapper } from './style';
interface IProps {
  children?: ReactNode;
}
const HomeAboutRight: FC<IProps> = () => {
  return (
    <HomeAboutRightWrapper>
      <h1 className="name">向日葵择校</h1>
      <div className="text">
        <p>
          向日葵择校是深圳地区乃至大湾区最受国际学校家长关注的择校平台之一，云集了大量的专业择校老师，旨在为每一个学生制作独一无二的国际教育升学规划方案。自媒体平台曾撰写过多篇关于国际学校选择方面的原创爆文，目前正在持续产出《名校系列》高质量原创文章，助力大湾区每一个具有国际化视野的家长，帮助孩子选择最适合的学校。截止今日，向日葵择校已在深圳举办过多次关于国际择校方面的展会，其中覆盖了深圳以及大湾区100
        </p>
      </div>
      <div className="btn">
        <a href="javascript:;">查看更多</a>
      </div>
    </HomeAboutRightWrapper>
  );
};
export default HomeAboutRight;
