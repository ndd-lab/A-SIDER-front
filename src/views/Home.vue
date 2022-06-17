<template>
  <div>
    <div class="home">
      <Banner />
      <div class="project-area mt-4">
        <div class="title">
          <h3>신규 프로젝트(하단 목록 6개정도 생각중)</h3>
          <router-link :to="{ name: 'project-recruit' }">
            <b-icon icon="plus-circle"></b-icon>더보기</router-link
          >
        </div>
        <div class="row">
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a @click="test" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-area mt-4">
        <div class="title">
          <h3>신규 스터디모임(하단 목록 6개정도 생각중)</h3>
          <router-link :to="{ name: 'project-recruit' }">
            <b-icon icon="plus" />더보기</router-link
          >
        </div>
        <div class="row">
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mb-5">
            <div class="card" style="width: 18rem">
              <img
                src="@/assets/images/project-tools.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Home/Banner';
import { test } from '@/api/test';
export default {
  name: 'Home',
  components: {
    Banner,
  },
  methods: {
    test() {
      test();
    },
  },
};
</script>

<style>
.project-area {
  width: 1200px;
  margin: 0 auto;
}
.project-area .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home {
  padding-top: 3em;
}
</style>
