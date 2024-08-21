import hRequest from '../../../service';
type SignupData = {
  name: string;
  phone: number;
  grade: string;
  theacher?: string;
};
export function getSignupSchool(data: SignupData) {
  return hRequest.post({
    url: `/apply`,
    data
  });
}
