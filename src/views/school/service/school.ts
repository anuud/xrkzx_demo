import hRequest from '../../../service';

export function getAddressSchool(address: string, course?: string) {
  return hRequest.get({
    url: `/school`,
    params: {
      address,
      course
    }
  });
}
