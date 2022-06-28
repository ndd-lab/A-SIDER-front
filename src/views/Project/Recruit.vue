<template>
  <div>
    <Banner />
    <b-container class="content">
      <div class="title_area">
        <h3 class="title mt-3 mb-3">모집중인 프로젝트</h3>
        <router-link :to="{ name: 'project-create' }"
          >프로젝트(공고) 만들기</router-link
        >
      </div>
      <div class="filter_menu mb-4">
        <span
          >필터1
          <b-icon icon="arrow-down"></b-icon>
        </span>
        <span>필터2</span>
        <span>필터3</span>
      </div>
      <div class="content_list mb-5">
        <b-row>
          <b-col cols="3">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col cols="3">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col cols="3">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col cols="3">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import Banner from '@/components/Project/Banner';
export default {
  name: 'recruit',
  components: { Banner },
};
</script>

<style scoped>
.content .title {
  font-weight: bolder;
}
.content .title_area {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.filter_menu {
  text-align: center;
  position: relative;
  height: 53px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.filter_menu > span {
  width: 110px;
  display: inline-block;
  float: left;
  line-height: 53px;
  font-size: 14px;
  border-right: 1px solid #efefef;
  font-weight: 700;
  cursor: pointer;
}
</style>
