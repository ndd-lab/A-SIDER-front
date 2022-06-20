<template>
  <b-container class="menu">
    <b-navbar type="light" variant="light" fixed="top">
      <b-navbar-nav class="m-2">
        <b-nav-item class="logo" @click="toRoute('home')"
          >A-SIDERS LOGO</b-nav-item
        >

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="프로젝트" @click="toRoute('project')">
          <b-dropdown-item @click="toRoute('project-recruit')"
            >프로젝트 공고</b-dropdown-item
          >
          <b-dropdown-item>SIDER</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item @click="toRoute('study-recruit')"> 스터디 </b-nav-item>
      </b-navbar-nav>

      <div
        v-if="!isLoggedIn"
        class="m-2 flex-row ml-md-auto d-none d-md-flex login"
      >
        <b-navbar-nav>
          <b-nav-item @click="showLoginModal"> 로그인/회원가입 </b-nav-item>
        </b-navbar-nav>
      </div>
      <div v-else class="m-2 flex-row ml-md-auto d-none d-md-flex login">
        <b-navbar-nav>
          <b-nav-item
            ><b-avatar icon="chat" style="padding: 0" badge="7"></b-avatar
          ></b-nav-item>
          <!--          <b-nav-item><b-avatar style="padding: 0"></b-avatar></b-nav-item>-->
          <b-nav-item-dropdown no-caret>
            <template #button-content>
              <b-img
                :src="imgSample"
                rounded="circle"
                width="40"
                height="40"
              ></b-img>
            </template>
            <b-dropdown-item @click="toRoute('myPage-dashboard')"
              >마이페이지</b-dropdown-item
            >
            <b-dropdown-item href="#">쪽지</b-dropdown-item>
            <b-dropdown-item href="#">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Menu',
  data() {
    return {
      imgSample: require('@/assets/banners/test.jpg'),
    };
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  methods: {
    showLoginModal() {
      this.$store.dispatch('auth/setShowLoginModal', true);
    },
    toRoute(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style scoped>
.logo {
  margin-right: 50px;
}
.ml-md-auto {
  margin-left: auto !important;
}
.login {
  margin-right: 150px !important;
}
</style>
