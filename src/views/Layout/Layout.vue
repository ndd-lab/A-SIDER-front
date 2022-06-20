<template>
  <div>
    <Header></Header>
    <div class="contents">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
export default {
  name: 'Layout',
  components: { Header, Footer },
};
</script>

<style scoped>
.contents {
  min-height: 70vh;
}
</style>
