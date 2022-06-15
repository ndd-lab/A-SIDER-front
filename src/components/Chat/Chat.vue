<template>
  <div>
    <button
      class="message"
      :class="[this.$store.getters.isLoggedIn ? 'show' : '']"
      type="button"
    >
      <i class="fas fa-comments"></i>
    </button>
    <div v-if="showChatList">
      <div class="list-box"></div>
    </div>
    <div v-if="showChatRoom">
      <div class="chat-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      showChatList: false,
      showChatRoom: false,
    };
  },
};
</script>

<style scoped>
button.message {
  margin: 0 !important;
  padding: 0 !important;
  background: #fff;
  height: 0;
  width: 0;
  overflow: hidden;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  color: transparent;
  clear: both;
  visibility: hidden;
  position: fixed;
  cursor: pointer;
  display: block;
  border: none;
  right: 50px;
  bottom: 75px;
  font-size: 0px;
  outline: 0 !important;
  z-index: 10;
  transition: all 0.3s ease-in-out;
}
button.message:hover,
button.message:active,
button.message:focus {
  outline: 0 !important;
}
button.message::before {
  display: block;
  vertical-align: middle;
  margin: -5px 0 auto;
}
button.message.show {
  display: block;
  background: #fff;
  color: #007bff;
  font-size: 25px;
  right: 25px;
  bottom: 50px;
  height: 50px;
  width: 50px;
  visibility: visible;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
}
button.message.show:active {
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.25);
}
.list-box {
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
  right: 10px;
  bottom: 10px;
  width: 18%;
  height: 55%;
  background: white;
  position: fixed;
  z-index: 15;
  border-radius: 10px;
}
.chat-box {
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.25);
  right: 10px;
  bottom: 10px;
  width: 18%;
  height: 60%;
  background: white;
  position: fixed;
  z-index: 15;
  border-radius: 10px;
}
</style>
