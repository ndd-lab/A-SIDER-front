<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-card>
          <div class="title">
            <h5>프로필</h5>
            <router-link :to="{ name: '' }" class="secondary">
              <b-icon variant="secondary" icon="plus"></b-icon
              >더보기</router-link
            >
          </div>
          프로필 내용 영역
        </b-card>
      </b-col>
      <b-col cols="12">
        <b-card>
          <div class="title">
            <h5>평가</h5>
            <router-link :to="{ name: '' }" class="secondary">
              <b-icon variant="secondary" icon="plus"></b-icon
              >더보기</router-link
            >
          </div>
          방사형 그래프 영역
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <div class="title">
        <h5>참여한 프로젝트</h5>
        <router-link :to="{ name: '' }" class="secondary">
          <b-icon variant="secondary" icon="plus"></b-icon>더보기</router-link
        >
      </div>
      <Slide></Slide>
    </b-card>
    <b-card>
      <div class="title">
        <h5>스터디 모임</h5>
        <router-link :to="{ name: '' }" class="secondary">
          <b-icon variant="secondary" icon="plus"></b-icon>더보기</router-link
        >
      </div>
      <Slide></Slide>
    </b-card>
  </div>
</template>

<script>
import Slide from '@/components/Common/Slide';
export default {
  name: 'Dashboard',
  components: { Slide },
  data() {
    return {
      imgSample: require('@/assets/banners/test.jpg'),
    };
  },
};
</script>

<style scoped>
.dashboard {
  /*margin-top: 40px;*/
}
.dashboard .card {
  box-shadow: 1px 1px 3px 1px #dadce0;
  margin-bottom: 20px;
}
.dashboard .title {
  display: flex;
  justify-content: space-between;
}
.dashboard a {
  color: #6c757d;
  text-decoration: none;
}
.profile {
  text-align: center;
  border-radius: 10%;
}
.profile h4 {
  margin-bottom: 1em;
}
.profile img {
  margin-bottom: 20px;
}
.profile p {
  color: #6c757d;
}
</style>
