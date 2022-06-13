<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="@/assets/banners/banner_1.png"
          class="d-block w-100"
          height="400"
          alt=""
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="@/assets/banners/banner_2.png"
          class="d-block w-100"
          height="400"
          alt=""
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/banners/banner_3.png"
          class="d-block w-100"
          height="400"
          alt=""
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style scoped></style>
