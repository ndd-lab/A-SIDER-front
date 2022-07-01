<template>
  <div class="recruit-field mb-3">
    <div class="project-item">
      <span class="item-title">모집 분야</span>
      <span class="item">
        <b-select v-model="selectedStatus" class="mb-3">
          <b-select-option value="C">개발</b-select-option>
          <b-select-option value="D">디자인</b-select-option>
          <b-select-option value="D">기획</b-select-option>
        </b-select>
      </span>
    </div>
    <div class="project-item">
      <span class="item-title">모집 인원</span>
      <span class="item">
        <b-select v-model="selectedStatus" class="mb-3">
          <b-select-option value="C">1</b-select-option>
          <b-select-option value="D">2</b-select-option>
        </b-select>
      </span>
    </div>
    <div class="project-item">
      <span class="item-title">경력</span>
      <span class="item">
        <b-select v-model="selectedStatus" class="mb-3">
          <b-select-option value="C">신입</b-select-option>
          <b-select-option value="D">2~4년차</b-select-option>
          <b-select-option value="D">5년이상</b-select-option>
        </b-select>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecruitField',
  data() {
    return { selectedStatus: '' };
  },
};
</script>

<style scoped>
.recruit-field {
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 3px 1px #dadce0;
  border-radius: 10px;
}
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
.project-item span {
  display: inline-block;
}
</style>
