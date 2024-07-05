import hRequest from '../../../service';

export function getDetailSchool(id: number) {
  return hRequest.get({
    url: `/school/detail/${id}`
  });
}
