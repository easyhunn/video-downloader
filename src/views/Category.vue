<template>
  <div class="main-view">
    <div class="w-100 h-100 main-content p-3 flex bg-gray-50">
      <div class="w-100 h-100 main-container">
        <div class="item w-100 h-100" v-for="item in listItem" :key="item.id">
          <div class="item-img"></div>
          <div class="content">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="sub-title">
              {{ item.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Category",
  components: {},
  data: function() {
    return {
      listItem: [
        {
          id: 2,
          title: "The Viet Nam language",
          subtitle:
            "Learn how to use these tricky English vocabulary words with a simple English test. Can you pass? Download the free PDF worksheet for this lesson here: http://www.speakenglishwithvanessa.co... ",
        },
        {
          id: 3,
          title: "The Viet Nam language",
          subtitle:
            "Learn how to use these tricky English vocabulary words with a simple English test. Can you pass? Download the free PDF worksheet for this lesson here: http://www.speakenglishwithvanessa.co... ",
        },
        {
          id: 4,
          title: "The Viet Nam language",
          subtitle:
            "Learn how to use these tricky English vocabulary words with a simple English test. Can you pass? Download the free PDF worksheet for this lesson here: http://www.speakenglishwithvanessa.co... ",
        },
        {
          id: 5,
          title: "The Viet Nam language",
          subtitle:
            "Learn how to use these tricky English vocabulary words with a simple English test. Can you pass? Download the free PDF worksheet for this lesson here: http://www.speakenglishwithvanessa.co... ",
        },
        {
          id: 6,
          title: "The Viet Nam language",
          subtitle:
            "Learn how to use these tricky English vocabulary words with a simple English test. Can you pass? Download the free PDF worksheet for this lesson here: http://www.speakenglishwithvanessa.co... ",
        },
      ],
    };
  },
  methods: {},
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
.main-content {
  // background-color: #e5e6eb;
  display: flex;
  max-height: calc(100vh - 60px);
  .main-container {
    flex: 1;
    padding: 8px;
    overflow: auto;
    .item {
      width: 100%;
      height: 150px;
      padding: 16px;
      display: flex;
      border-bottom: 1px solid #bbbbbb;
      .item-img {
        border: 1px solid;
        height: 100%;
        width: 220px;
      }
      .content {
        padding: 0 16px 0 16px;
      }
    }
  }
}
</style>
