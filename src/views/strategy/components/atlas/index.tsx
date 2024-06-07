import React from 'react';
import type { ReactNode, FC } from 'react';
import { AtlasWrapper } from './styled';
import Caption from '../caption';
interface IProps {
  children?: ReactNode;
}
const Atlas: FC<IProps> = () => {
  return (
    <AtlasWrapper>
      <div className="w-4/5 m-auto h-full">
        <Caption title="了解深圳各区国际学校" isSub="信息一栏" subtitle="深圳国际学校分布" />
        <div className="h-[80%] relative centent">
          <img src={require('../../../../assets/images/ditu.png')} alt="" className="w-1/2" />
          <div className="item-card1">
            <span>保安区</span>
            <p className="font-bold text-black">民办国际化学校：11所</p>
            <p>深圳市桃源居中澳实验学校国际部</p>
            <p>深圳东方英文书院国际部</p>
            <p> 新哲文院(深圳实验学校国际教育基地)</p>
            <p> 南山为明学校国际部(原北大附中南山分校)</p>
            <p> 深圳富源英美学校</p>
            <p>中英公学国际部</p>
            <p>深圳国际预科书院</p>
            <p>石岩公学橘郡国际课程中心（橘郡美高）</p>
            <p>深圳市华侨（康桥）书院国际部</p>
            <p>深圳市音奥艺术书院 深圳天立国际高中</p>
          </div>
          <div className="item-card2">
            <span>光明区</span>
            <p className=" text-black font-bold">民办国际化学校：1所</p>
            <p>光明区贝赛思外国语学校</p>
          </div>
          <div className="item-card3">
            <span>罗湖区 </span>
            <p className="font-bold text-black">公立学校国际部/班：1所</p>
            <p className="pb-1 border-b-2">深圳中学国际班</p>
            <p className="pt-1 font-bold text-black">民办国际化学校：3所</p>
            <p>罗湖港人子弟学校</p>
            <p>深圳奥斯翰外国语学校</p>
            <p>深圳市罗湖区华美外国语学校</p>
          </div>
          <div className="item-card4">
            <span>福田区 </span>
            <p className="font-bold text-black">公立学校国际部/班：1所</p>
            <p className="pb-1 border-b-2">深圳高级中学国际部SID</p>
            <p className="pt-1 font-bold text-black">民办国际化学校：3所</p>
            <p>深圳国际交流书院</p>
            <p>深圳贝赛思双语学校</p>
            <p>深圳城市绿洲学校</p>
            <p>深圳市耀华实验学校国际部</p>
            <p>深圳云顶学校国际部</p>
            <p>深圳云顶博书院</p>
            <p>深圳普林云海港人子弟学校</p>
            <p>福港艺林学校（原艺校福由泰然学校）</p>
            <p>深圳新福景双语学校</p>
            <p>深圳赛格国际学校</p>
            <p>深圳哈博学校</p>
          </div>
          <div className="item-card5">
            <span>龙华区 </span>
            <p className="font-bold text-black">外籍人员子女学校：1所</p>
            <p className="pb-1 border-b-2">曼彻斯通城堡学校（龙华校区）</p>
            <p className="pt-1 font-bold text-black">民办国际化学校：12所</p>
            <p>深圳方科双语学校</p>
            <p>深圳诺德双语学校</p>
            <p>博观外国语学校（柏朗思观湖学校）</p>
            <p>深圳市厚德书院</p>
            <p>深圳汉开·中宏国际书院</p>
            <p>展华实验学校国际部(AISSU)</p>
            <p>格睿特高级中学DSE部</p>
            <p>鲸帆DSE国际学院（鲸帆港人子弟学校）</p>
            <p>深圳美中元培国际书院</p>
            <p>香港培侨信义学校</p>
            <p>橘郡国际学校（深圳校区）</p>
            <p>深圳威睿达思国际学校（德朗睿思国际学校）</p>
          </div>
          <div className="item-card6">
            <span>坪山区</span>
            <p className=" text-black font-bold">民办国际化学校：6所</p>
            <p>深圳华朗学校</p>
            <p>深圳市坪山区弘金地学校</p>
            <p>深圳市中新中学</p>
            <p>深圳市坪山区景园外国语学校</p>
          </div>
          <div className="item-card7">
            <span>大鹏新区 </span>
            <p className="pt-1 font-bold text-black">民办国际化学校：4所</p>
            <p>瑞得福国际学校</p>
            <p>深圳明德实验学校国际部</p>
            <p>香港活石学院</p>
            <p>新苗书院DSE课程</p>
          </div>
          <div className="item-card8">
            <span>龙岗区 </span>
            <p className="font-bold text-black">公立学校国际部/班：1所</p>
            <p className="pb-1 border-b-2">深圳市第三高级中学国际部</p>
            <p className="pt-1 font-bold text-black">民办国际化学校：6所</p>
            <p>深圳市承翰学校国际部</p>
            <p>深圳外国语湾区学校SGA</p>
            <p>深圳市枫叶学校</p>
            <p>广美学院附中AIP深圳校区</p>
            <p>深圳市珊蒂泉外语学校</p>
            <p>深圳菁华中英文实验中学国际部</p>
          </div>
          <div className="item-card9">
            <span>盐田区 </span>
            <p className="font-bold text-black">公立学校国际部/班：1所</p>
            <p className="pb-1 border-b-2">深圳外国语学校高中部国际班</p>
            <p className="pt-1 font-bold text-black">民办国际化学校：2所</p>
            <p>万科梅沙书院</p>
            <p>深圳梅沙双语学校</p>
          </div>
          <div className="item-card10">
            <span>南山区 </span>
            <p className="font-bold text-black">公立国际部：6所</p>
            <p className="pb-1 border-b-2">南山中英文学校协同港籍班</p>
            <p className="pt-1 font-bold text-black">外籍人员子女学校：6所</p>
            <p>深圳日本人学校</p>
            <p>深圳KIS(韩国)国际学校</p>
            <p>深圳前海哈罗外籍人员子女学校</p>
            <p>深圳前海哈罗港人子弟学校</p>
            <p>深圳南山外籍人员子女学校（ISNS</p>
            <p className="pb-2 border-b-2">深圳坎特伯雷国王学校</p>
            <p className="pt-1 font-bold text-black">民办国际化学校：12所</p>
            <p>AISSU(YHV)（原深大师院云海谷校区）</p>
            <p>深圳（南山）中加学校</p>
            <p>深圳IPC国际校区</p>
            <p>深圳博纳学校</p>
            <p>南山区道新学校（原道尔顿新华公学）</p>
            <p>深圳市荟同学校</p>
            <p>SZICC深圳国际课程中心</p>
            <p>爱文世界学校</p>
            <p>深圳湾国际艺术教育SWAS</p>
            <p>丽林维育维多利亚学校</p>
            <p>深圳天辰国际书院</p>
            <p>智胤国际书院</p>
            <p>南山中英文学校协同港籍班</p>
          </div>
        </div>
      </div>
    </AtlasWrapper>
  );
};
export default Atlas;
