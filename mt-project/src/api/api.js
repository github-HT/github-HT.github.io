import {Request} from './request.js';

const baseUrl =
  'https://c9cc885f-7b7d-47a3-b722-195d7d6349ad.bspapp.com/http/users';
const Req = new Request({
  baseUrl: baseUrl,
  timeout: 20 * 1000,
});
export async function getActivityList(params = {}) {
  return await Req.post(baseUrl, {
    action: 'activity/list/get',
    params,
  });
}
