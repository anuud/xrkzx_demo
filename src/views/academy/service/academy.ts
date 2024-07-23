import hRequest from '../../../service';

export function getSerach(params: any) {
  return hRequest.get({
    url: `/search`,
    params
  });
}
