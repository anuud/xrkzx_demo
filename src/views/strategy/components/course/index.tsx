import React from 'react';
import type { ReactNode, FC } from 'react';
import { CourseWrapper } from './styled';
import { nanoid } from 'nanoid';
interface IProps {
  children?: ReactNode;
}
// const info=[
//   {
//     _id:nanoid(),
//     name:'国际部/校直通计划',
//     list:[
//       {
//         _id:nanoid(),
//         text:['国际学校一站式直通计划','国际部——站试直播计划'],
//         item:['']
//       }
//     ]
//   },
//   {
//     _id:nanoid(),
//     name:'MAP/CERT/CAT4'
//   },
//   {
//     _id:nanoid(),
//     name:'国际部备考'
//   },
//   {
//     _id:nanoid(),
//     name:'国际学校备考'
//   }
// ]
const Curse: FC<IProps> = () => {
  return (
    <CourseWrapper>
      {/* <div className="w-[70%] m-auto">
        cinst
      </div> */}
    </CourseWrapper>
  );
};
export default Curse;
