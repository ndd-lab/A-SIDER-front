<template>
  <b-container class="recruit-content">
    <div class="title">
      <p>모집공고 타이틀</p>
    </div>
    <div class="writer">
      <span>작성자 아이디</span>
      <div class="divider_v"></div>
      <span>작성일</span>
    </div>
    <div class="divider_h"></div>
    <div class="project-info">
      <div class="title">
        <p>프로젝트 타이틀</p>
      </div>
      <div class="content">프로젝트 설명 영역</div>
    </div>
    <div class="recruit-info"></div>
  </b-container>
</template>

<script>
export default {
  name: 'RecruitDetail',
};
</script>

<style scoped>
.recruit-content {
  margin-top: 30px;
  margin-bottom: 30px;
}
.recruit-content .title p {
  font-weight: 800;
  font-size: 3em;
}
.recruit-content .writer {
  display: flex;
  align-items: center;
}
.recruit-content .project-info {
}
.project-info .title p {
  font-weight: 600;
  font-size: 2em;
}
</style>
