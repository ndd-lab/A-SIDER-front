<template>
  <div>
    <router-view />
    <Chat></Chat>
  </div>
</template>

<script>
import Chat from '@/components/Chat/Chat';

export default {
  name: 'App',
  components: { Chat },
};
</script>

<style>
@import './assets/css/common.css';
#app {
  font-family: 'Noto Sans KR', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
