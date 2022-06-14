import axios from '@/utils/axios';
import { authCheck } from '@/utils/common';
export function test(data) {
  if (!authCheck()) return;
  return axios.get('/', data);
}
