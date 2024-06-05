import React from 'react';
import type { ReactNode, FC } from 'react';
import { SectionText, SubTitle, ZxBtn, ZxItemWrapper } from './styled';
import Caption from '../caption';
interface IProps {
  children?: ReactNode;
}
const SectionStrategy: FC<IProps> = () => {
  return (
    <div className="mt-5 w-[80%] m-auto mb-5">
      <Caption title="深圳百所私立国际学校如何选择？" subtitle="择校前是不是这些问题让您头疼？" />
      <ZxItemWrapper>
        <div className="first1_sec mt-10 m-1">
          <h5>如何获得深圳国际部录取名额？</h5>
          <ul>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                各区优质私立国际学校有哪些
              </a>
            </li>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                如何挑选适合孩子的国际学校
              </a>
            </li>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                常见国际课程体系如何选择
              </a>
            </li>
          </ul>
        </div>
        <div className="first2_sec mt-10 m-1">
          <h5>如何获得深圳国际部录取名额？</h5>
          <ul>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                家庭背景评估
              </a>
            </li>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                学生语言能力评估
              </a>
            </li>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                量身定制择校方案与备考计划
              </a>
            </li>
          </ul>
        </div>
        <div className="first3_sec mt-10 m-1">
          <h5>如何合理规划国际路线择校？</h5>
          <ul>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                家庭背景评估
              </a>
            </li>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                学生语言能力评估
              </a>
            </li>
            <li>
              <a
                href="https://www15c1.53kf.com/webCompany.php?arg=10237796&amp;kf_sign=DUwMTMTY1Ng2NzExMTI4MDM1MDA0MDA1NzIyMzc3OTY%253D&amp;style=14"
                target="_blank"
                rel="noreferrer"
              >
                量身定制择校方案与备考计划
              </a>
            </li>
          </ul>
        </div>
      </ZxItemWrapper>
      <ZxBtn>
        <div className="w-full text-center h-14">
          <a
            href="https://bj.xhd.cn/kefu_1.htm"
            rel="noreferrer"
            className="inline-block w-48 h-9 leading-10 zx-btn mt-2"
          >
            了解更多择校详情
          </a>
        </div>
      </ZxBtn>
    </div>
  );
};
export default SectionStrategy;
