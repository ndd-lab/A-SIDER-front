<template>
  <div>
    <Carousel
      :perPage="1"
      paginationPosition="bottom-overlay"
      autoplay="true"
      loop="true"
    >
      <Slide class="carousel-inner">
        <img
          class="d-block img-fluid w-100"
          src="@/assets/banners/test.jpg"
          alt="image slot"
        />
      </Slide>
      <Slide class="carousel-inner">
        <img
          class="d-block img-fluid w-100"
          src="@/assets/banners/banner_1.png"
          alt="image slot"
        />
      </Slide>
      <Slide class="carousel-inner">
        <img
          class="d-block img-fluid w-100"
          src="@/assets/banners/banner_2.png"
          alt="image slot"
        />
      </Slide>
      <Slide class="carousel-inner">
        <img
          class="d-block img-fluid w-100"
          src="@/assets/banners/banner_3.png"
          alt="image slot"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Carousel, Slide },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.carousel-inner img {
  max-height: 350px;
}
</style>
