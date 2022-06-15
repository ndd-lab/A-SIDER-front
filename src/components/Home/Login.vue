<template>
  <div class="login">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">이메일</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control rounded-3"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">비밀번호</label>
    </div>
    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary">로그인</button>
    <hr class="my-4" />
    <h2 class="fs-5 fw-bold mb-3">간편 로그인</h2>
    <button
      class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
      type="submit"
    >
      카카오로 로그인
    </button>
    <button
      class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
      type="submit"
    >
      구글로 로그인
    </button>
    <button
      class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
      type="submit"
    >
      깃허브로 로그인
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped></style>
