<template>
  <div>
    <Menu></Menu>
    <b-modal
      v-model="showModal"
      title="로그인"
      centered
      header-class="p-5 pb-4 border-bottom-0"
      body-class="p-5"
      footer-class="p-5"
      content-class="login-container"
      hide-footer
      @hidden="closeLoginModal"
      ><Login></Login
    ></b-modal>
  </div>
</template>

<script>
import Login from '@/components/Home/Login';
import Menu from '@/components/Home/Menu';
import { mapState } from 'vuex';
export default {
  name: 'Header',
  components: { Menu, Login },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapState('auth', ['showLoginModal']),
  },
  watch: {
    showLoginModal(val) {
      this.showModal = val;
    },
  },
  methods: {
    closeLoginModal() {
      this.$store.dispatch('auth/setShowLoginModal', false);
    },
  },
};
</script>

<style scoped>
/*.menu {*/
/*  padding-left: 50px;*/
/*}*/
.login-container {
  border-radius: 1rem;
}
</style>
