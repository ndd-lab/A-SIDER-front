<template>
  <b-container class="project-create mt-4 mb-4">
    <b-tabs v-model="tabIndex" class="mt-2 mb-2" align="left">
      <b-tab title="프로젝트 생성"><ProjectCreate /></b-tab>
      <b-tab title="프로젝트 모집 공고"><RecruitCreate /></b-tab>
      <b-tab title="checking">Tab contents 3</b-tab>
    </b-tabs>
    <div>
      <b-button v-if="tabIndex > 0" variant="primary" @click="tabIndex--"
        >이전</b-button
      >
      <b-button variant="primary" @click="tabIndex++">다음</b-button>
    </div>
  </b-container>
</template>

<script>
import ProjectCreate from '@/components/Project/ProjectCreate';
import RecruitCreate from '@/components/Project/RecruitCreate';

export default {
  name: 'Create',
  components: { ProjectCreate, RecruitCreate },
  data() {
    return {
      tabIndex: 0,
    };
  },
};
</script>

<style scoped>
.project-create {
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 3px 1px #dadce0;
  border-radius: 50px;
  padding: 30px;
}
</style>
