<template>
  <b-card>
    <div class="title">
      <h5>참여한 프로젝트</h5>
      <router-link :to="{ name: '' }" class="secondary">
        <b-icon variant="secondary" icon="plus"></b-icon>더보기</router-link
      >
    </div>
    <Flicking
      :options="{
        circular: true,
        stopOnHover: true,
      }"
      :plugins="plugin"
    >
      <div v-for="idx in list" class="flicking-panel" :key="idx">
        <div class="card m-3" style="width: 18rem">
          <img
            src="@/assets/images/project-tools.jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Card title {{ idx }}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </Flicking>
  </b-card>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';

export default {
  name: 'Swiper',
  components: { Flicking },
  data() {
    return {
      list: [0, 1, 2, 3, 4],
      plugin: [
        new AutoPlay({ duration: 1000, direction: 'NEXT', stopOnHover: false }),
      ],
    };
  },
};
</script>

<style scoped>
@import '../../../node_modules/@egjs/vue-flicking/dist/flicking.css';
.dashboard .card {
  box-shadow: 1px 1px 3px 1px #dadce0;
  margin-bottom: 20px;
}
.dashboard .title {
  display: flex;
  justify-content: space-between;
}
.dashboard .title a {
  color: #6c757d;
  text-decoration: none;
}
</style>
