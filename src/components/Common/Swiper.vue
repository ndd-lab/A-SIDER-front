<template>
  <b-carousel :interval="3000">
    <b-carousel-slide>
      <template #img>
        <div class="card" style="width: 18rem">
          <img
            src="@/assets/images/project-tools.jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.`
            </p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <div class="card" style="width: 18rem">
          <img
            src="@/assets/images/project-tools.jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <div class="card" style="width: 18rem">
          <img
            src="@/assets/images/project-tools.jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template #img>
        <div class="card" style="width: 18rem">
          <img
            src="@/assets/images/project-tools.jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import 'swiper/css/swiper.css';
export default {
  name: 'Swiper',
};
</script>

<style scoped></style>
