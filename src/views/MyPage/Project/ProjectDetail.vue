<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="3"
          ><b-card style="max-width: 20rem" class="mb-2">
            <b-list-group flush>
              <b-list-group-item>메뉴1</b-list-group-item>
              <b-list-group-item>메뉴2</b-list-group-item>
              <b-list-group-item>메뉴3</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col cols="9">
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
                    ></router-link>
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  data() {
    return {
      imgSample: require('@/assets/banners/test.jpg'),
    };
  },
};
</script>

<style scoped></style>
