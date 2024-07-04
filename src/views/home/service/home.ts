import hRequest from '../../../service';

export function getBanners() {
  return hRequest.get({
    url: `/banner`
  });
}
export function getstytem(stystem = '老牌学校') {
  return hRequest.get({
    url: `/stytem`,
    params: {
      stystem
    }
  });
}
