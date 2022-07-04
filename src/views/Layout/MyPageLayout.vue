<template>
  <div>
    <Header></Header>
    <div class="contents">
      <b-container class="dashboard mt-5">
        <b-row>
          <b-col cols="3">
            <b-card style="max-width: 20rem" class="profile mb-2">
              <b-card-img
                :src="imgSample"
                style="border-radius: 50%"
              ></b-card-img>
              <div>
                <h4>나는개</h4>
                <p>개발자</p>
                <p>Java, NodeJs, vue, React</p>
              </div>
            </b-card>
          </b-col>
          <b-col cols="9">
            <router-view></router-view>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
export default {
  name: 'Layout',
  components: { Header, Footer },
  data() {
    return {
      imgSample: require('@/assets/banners/test.jpg'),
    };
  },
};
</script>

<style scoped>
.contents {
  min-height: 70vh;
  /*margin-top: 160px;*/
  /*padding-top: 88px;*/
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
