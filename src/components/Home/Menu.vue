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
        <b-nav-item> 스터디 </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="m-2 flex-row ml-md-auto d-none d-md-flex login">
        <b-nav-item @click="showLoginModal"> 로그인/회원가입 </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: 'Menu',
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
