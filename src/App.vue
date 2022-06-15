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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
