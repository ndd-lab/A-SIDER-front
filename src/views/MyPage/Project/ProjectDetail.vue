<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="3"
          ><b-card style="max-width: 20rem" class="mb-2">
            <b-list-group flush>
              <b-list-group-item>메뉴1</b-list-group-item>
              <b-list-group-item>메뉴2</b-list-group-item>
              <b-list-group-item>메뉴3</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col cols="9">
          <h5>메뉴 타이틀 영역</h5>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  data() {
    return {};
  },
};
</script>

<style scoped></style>
