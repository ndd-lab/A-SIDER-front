<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">A-SIDERS LOGO</a>
      <div class="collapse navbar-collapse menu" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              프로젝트
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">프로젝트 공고</a></li>
              <li><a class="dropdown-item" href="#">SIDER</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">스터디</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Login v-if="showLoginModal" @closeModal="closeLoginModal"></Login>
</template>

<script>
import Login from '@/components/Home/Login';
import { mapState } from 'vuex';
export default {
  name: 'Header',
  components: { Login },
  data() {
    return {};
  },
  computed: {
    ...mapState('auth', ['showLoginModal']),
  },
  methods: {
    closeLoginModal() {
      this.$store.dispatch('auth/setShowLoginModal', false);
    },
  },
};
</script>

<style scoped>
.menu {
  padding-left: 50px;
}
</style>
