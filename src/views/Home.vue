<template>
  <div class="main-view">
    <Content />
  </div>
</template>
<script>
import Content from "../components/layout/Content";

export default {
  name: "Home",
  components: { Content },
};
</script>
<style lang="scss" scoped>
.main-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .main-view-container {
    display: flex;
    flex: 1;
  }
}
</style>
