<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
export default {
  name: 'Layout',
  components: { Header, Footer },
};
</script>

<style scoped></style>
