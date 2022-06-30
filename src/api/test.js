import axios from '@/utils/axios';
import { authCheck } from '@/utils/common';
export function test(data) {
  if (!authCheck()) return;
  return axios.get('/', data);
}

export function getAdministrativeDivision() {
  const data = axios.get(
    'https://api.vworld.kr/req/data?key=E467F74D-7954-3FE4-9CC2-F495E45D93AF&domain=http://localhost:8081&service=data&version=2.0&request=getfeature&format=json&size=1000&page=1&geometry=false&attribute=true&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_C_ADSIDO_INFO',
  );
  console.log(data);
}
