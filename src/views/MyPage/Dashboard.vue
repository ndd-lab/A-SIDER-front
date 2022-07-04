<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-card>
          <div class="title">
            <h5>참여한 프로젝트</h5>
            <router-link :to="{ name: '' }" class="secondary">
              <b-icon variant="secondary" icon="plus"></b-icon
              >더보기</router-link
            >
          </div>
          <ul>
            <li>
              <router-link
                :to="{
                  name: 'myPage-project-detail',
                  params: { seq: 1 },
                }"
                >프로젝트1</router-link
              >
            </li>
            <li>프로젝트2</li>
            <li>프로젝트3</li>
          </ul>
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div class="title">
            <h5>참여한 프로젝트</h5>
            <router-link :to="{ name: '' }" class="secondary">
              <b-icon variant="secondary" icon="plus"></b-icon
              >더보기</router-link
            >
          </div>
          <ul>
            <li>프로젝트1</li>
            <li>프로젝트2</li>
            <li>프로젝트3</li>
          </ul>
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div class="title">
            <h5>참여한 스터디 모임</h5>
            <router-link :to="{ name: '' }" class="secondary">
              <b-icon variant="secondary" icon="plus"></b-icon
              >더보기</router-link
            >
          </div>
          <ul>
            <li>모임1</li>
            <li>모임2</li>
            <li>모임3</li>
          </ul>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
