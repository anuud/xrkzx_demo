import { nanoid } from 'nanoid';

export const bannerlist = [
  {
    _id: nanoid(),
    url: `${require('../images/banner/img1.jpg')}`
  },
  {
    _id: nanoid(),
    url: `${require('../images/banner/img2.png')}`
  },
  {
    id: nanoid(),
    url: `${require('../images/banner/img3.png')}`
  },
  {
    _id: nanoid(),
    url: `${require('../images/banner/img4.png')}`
  }
];
