<template>
  <div class="mt-5">
    <div class="project-item full">
      <span class="item-title">프로젝트 모집 타이틀</span><br />
      <b-input placeholder="ex) 열심히 일 할 노예를 구해요" />
    </div>
    <div class="project-item">
      <span class="item-title">모집 상태</span>
      <span class="item">
        <b-select v-model="selectedStatus" class="mb-3">
          <b-select-option value="C">옵션1</b-select-option>
          <b-select-option value="D">옵션2</b-select-option>
        </b-select>
      </span>
    </div>
    <div v-for="n in recruitFieldCnt" :key="n + 'field'">
      <RecruitField></RecruitField>
    </div>
    <button @click="recruitFieldCnt++">모집 대상 추가</button>
  </div>
</template>

<script>
import RecruitField from '@/components/Project/RecruitField';

export default {
  name: 'RecruitCreate',
  components: { RecruitField },
  data() {
    return {
      selectedStatus: '',
      recruitFieldCnt: 1,
    };
  },
};
</script>

<style scoped>
.project-item {
  display: flex;
  margin: 20px 20px;
}
.project-item .item-title {
  width: 140px;
}
.project-item .item {
  height: 35px;
}
.full {
  flex-direction: column;
}
.full.item-title {
  width: 100%;
}
.project-item span {
  display: inline-block;
}
</style>
