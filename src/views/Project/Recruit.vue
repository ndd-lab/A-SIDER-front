<template>
  <div>
    <Banner />
    <b-container class="content">
      <h3 class="title mt-3 mb-3">모집중인 프로젝트</h3>
      <b-row>
        <b-col cols="3">
          <b-row>
            <b-col class="filter_menu" cols="12">
              <span
                >필터1
                <b-icon icon="arrow-down"></b-icon>
              </span>
            </b-col>
            <b-col class="filter_menu" cols="12">
              <span>필터2<b-icon icon="arrow-down"></b-icon></span>
            </b-col>
            <b-col class="filter_menu" cols="12">
              <span>필터3<b-icon icon="arrow-down"></b-icon></span>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="9">
          <div>
            <b-row>
              <b-col cols="8">
                <div style="display: flex; justify-content: space-between">
                  <b-form-input
                    class="keyword"
                    placeholder="키워드를 검색하세요"
                  ></b-form-input>
                  <b-button style="width: 10%" variant="outline-dark"
                    >조회</b-button
                  >
                </div>
              </b-col>
              <b-col cols="4">
                <div style="display: flex; justify-content: space-around">
                  <p>마감순</p>
                  <p>조회순</p>
                  <p>최신순</p>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="content_list mb-5">
            <b-row>
              <b-col cols="12">
                <b-card no-body class="overflow-hidden" @click="showDetail">
                  <b-row no-gutters>
                    <b-col md="3">
                      <b-card-img
                        src="https://picsum.photos/400/400/?image=20"
                        alt="Image"
                        class="rounded-0"
                      ></b-card-img>
                    </b-col>
                    <b-col md="9">
                      <b-card-body title="Horizontal Card">
                        <b-card-text>
                          This is a wider card with supporting text as a natural
                          lead-in to additional content. This content is a
                          little bit longer.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card no-body class="overflow-hidden">
                  <b-row no-gutters>
                    <b-col md="3">
                      <b-card-img
                        src="https://picsum.photos/400/400/?image=20"
                        alt="Image"
                        class="rounded-0"
                      ></b-card-img>
                    </b-col>
                    <b-col md="9">
                      <b-card-body title="Horizontal Card">
                        <b-card-text>
                          This is a wider card with supporting text as a natural
                          lead-in to additional content. This content is a
                          little bit longer.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col cols="12">
                <b-card no-body class="overflow-hidden">
                  <b-row no-gutters>
                    <b-col md="3">
                      <b-card-img
                        src="https://picsum.photos/400/400/?image=20"
                        alt="Image"
                        class="rounded-0"
                      ></b-card-img>
                    </b-col>
                    <b-col md="9">
                      <b-card-body title="Horizontal Card">
                        <b-card-text>
                          This is a wider card with supporting text as a natural
                          lead-in to additional content. This content is a
                          little bit longer.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col cols="12">
                <b-card no-body class="overflow-hidden">
                  <b-row no-gutters>
                    <b-col md="3">
                      <b-card-img
                        src="https://picsum.photos/400/400/?image=20"
                        alt="Image"
                        class="rounded-0"
                      ></b-card-img>
                    </b-col>
                    <b-col md="9">
                      <b-card-body title="Horizontal Card">
                        <b-card-text>
                          This is a wider card with supporting text as a natural
                          lead-in to additional content. This content is a
                          little bit longer.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Banner from '@/components/Project/Banner';
export default {
  name: 'recruit',
  components: { Banner },
  methods: {
    showDetail() {
      this.$router.push({ name: 'project-detail' });
    },
  },
};
</script>

<style scoped>
.content .title {
  font-weight: bolder;
}
.filter_menu {
  text-align: center;
  position: relative;
  height: 53px;
  border-bottom: 1px solid #efefef;
}
.filter_menu > span {
  width: 100%;
  display: inline-block;
  float: left;
  line-height: 53px;
  font-size: 14px;
  border-right: 1px solid #efefef;
  font-weight: 700;
  cursor: pointer;
}
.keyword ::after {
  content: 'test';
}

.content_list .card {
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
