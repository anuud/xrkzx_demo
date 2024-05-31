import hRequest from '../../../service';

export function getBanners() {
  return hRequest.get({
    url: `/userlist`
  });
}
