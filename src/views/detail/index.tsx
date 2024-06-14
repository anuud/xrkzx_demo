import React from 'react';
import type { ReactNode, FC } from 'react';
import { DetailWrapper } from './styled';
import DetailTopinfo from './components/detail-topinfo';
import { campus } from '../../assets/data/homelist';
import {
  BookOutlined,
  FileTextOutlined,
  HighlightOutlined,
  SmileOutlined
} from '@ant-design/icons';
import { Flex, Tag } from 'antd';
interface IProps {
  children?: ReactNode;
}
const Detail: FC<IProps> = () => {
  return (
    <DetailWrapper>
      <div className="detail-banner"></div>
      <div className="detail-content">
        <div>
          <DetailTopinfo name="蛇口科爱赛国际学校" istext="简介" />
          <div className="content-item">
            <div className="mt-2">
              <FileTextOutlined />
              <span className="text-base font-bold ml-1">学校详情：</span>
              <span className="text-sm">
                蛇口科爱赛国际学校（QSI International School of
                Shenzhen）是于2001年由教育部批准设立的深圳老牌外籍人员子女学校。学校提供幼儿园至高中层次的教育，接收来自五湖四海的外籍学生。深圳QSI隶属于科爱赛教育集团，该集团于1971年开始建校，现在29个国家有36所学校，在中国就有5所科爱赛学校。
                深圳QSI各种资质非常齐全，具备了美国中部院校联盟（MSA-CESS）资格认证、IBO国际文凭组织认证、ACAMIS中蒙购机学校协会认证的等七项认证，是目前深圳地区获得认证最多的学校之一，所以，科爱赛学校开出的成绩单在全世界大学中的认可度非常高。
              </span>
            </div>
            <div className="flex my-2">
              <SmileOutlined />
              <span className="text-base font-bold ml-1 flex">学校优势：</span>
              <Flex wrap>
                <Tag color="#2db7f5">做事精益求精</Tag>
                <Tag color="#2db7f5">严谨的学术态度</Tag>
                <Tag color="#2db7f5">引导学生学习态度</Tag>
                <Tag color="#2db7f5">高端国际课程</Tag>
              </Flex>
            </div>
            <div>
              <HighlightOutlined />
              <span className="text-base font-bold ml-1">办学资历:</span>
              <span className="text-sm ml-1">
                科爱赛在全球开了35所学校，师资都是在美国统一招聘、面试、录取之后调任到全各地的科爱赛。目前深圳校区共有近300名来自世界各地的员工，其中200为教学员工，除了中文老师以外，其余老师均来自母语为英语的国家。目前有来自48个国家和地区1,300多名学生，高中毕业率达100%。学生都选择到国外接受4年大学教育。学生/老师比例略低于9比1。
              </span>
            </div>
            <div className="flex mt-2">
              <BookOutlined />
              <span className="text-base font-bold ml-1 flex">招生简介：</span>
              <span>正在招生/可插班</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <DetailTopinfo name="招生及考试信息" />
          <div>
            <div className="flex my-2">
              <span className="text-base font-bold ml-1 flex">身份要求：</span>
              <span>1.学生持有外国护照+中国签证+出入境章</span>
              <span>
                2.港澳身份（香港优才、专才、留学、企业家入境计划去的的香港身份也符合要求）
              </span>
            </div>
            <div className="my-2">
              <span className="text-base font-bold ml-1 w-[80px]">入学测试：</span>
              <span>
                PreK-K：孩子/父母需参加入学综合面试G1-G2 : MAP测试 *考察数学、阅读两个科目 综合面试
                G3及以上: 1. MAP测试 *考察数学、阅读、语言使用三个科目 2.英文写作
                3.综合面试（从2岁-18岁的外籍学生）
              </span>
            </div>
          </div>
        </div>
        <div className="campus mt-4">
          <DetailTopinfo name="校园环境" />
          <div className="flex mt-2">
            {campus.map((item) => {
              return (
                <div key={item._id} className="w-[25%] p-1">
                  <img src={item.image_URL} alt="" />
                  <div className="text-center">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DetailWrapper>
  );
};
export default Detail;
