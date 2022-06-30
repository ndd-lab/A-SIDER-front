<template>
  <div class="mt-5">
    <div class="project-item full">
      <span class="item-title">프로젝트명</span><br />
      <b-input placeholder="ex) A-SIDER" />
    </div>
    <div class="project-item">
      <span class="item-title">프로젝트 상태</span>
      <span class="item">
        <b-select v-model="selectedStatus" class="mb-3">
          <b-select-option value="C">옵션1</b-select-option>
          <b-select-option value="D">옵션2</b-select-option>
        </b-select>
      </span>
    </div>
    <div class="project-item">
      <span class="item-title">활동지역</span>
      <span class="item">
        <b-select v-model="selectedStatus" class="mb-3">
          <b-select-option value="C">서울</b-select-option>
          <b-select-option value="D">경기</b-select-option>
        </b-select>
      </span>
    </div>
    <div class="project-item">
      <span class="item-title">카테고리</span>
      <span class="item">
        <b-select v-model="selectedStatus" class="mb-3">
          <b-select-option value="C">여행</b-select-option>
          <b-select-option value="D">배달</b-select-option>
        </b-select>
      </span>
    </div>
    <div class="project-item">
      <span class="item-title">프로젝트 시작일</span>
      <span class="item">
        <b-datepicker></b-datepicker>
      </span>
    </div>
    <div class="project-item">
      <span class="item-title">팀 컬러</span>
      <span class="item">
        <b-input type="color" />
      </span>
    </div>
  </div>
</template>

<script>
// import { getAdministrativeDivision } from '@/api/test';
import axios from 'axios';
export default {
  name: 'ProjectCreate',
  data() {
    return {
      selectedStatus: null,
    };
  },
  created() {
    this.getAdministrativeDivision();
    // getAdministrativeDivision();
  },
  methods: {
    getAdministrativeDivision() {
      axios
        .get(
          `https://api.vworld.kr/req/data?key=E467F74D-7954-3FE4-9CC2-F495E45D93AF&domain=http://localhost:8081&service=data&version=2.0&request=getfeature&format=jsonp&size=1000&page=1&geometry=false&attribute=true&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_C_ADSIDO_INFO`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*',
            },
            withCredentials: true,
          },
        )
        .then(res => {
          console.log('result::::::::::', res);
        })
        .catch(err => {
          console.log('err::::::::', err);
        });
    },
  },
};
</script>

<style scoped>
.project-item {
  display: flex;
  margin: 20px 20px;
}
.project-item .item-title {
  width: 140px;
}
.project-item .item {
  height: 35px;
}
.full {
  flex-direction: column;
}
.project-item span {
  display: inline-block;
}
</style>
