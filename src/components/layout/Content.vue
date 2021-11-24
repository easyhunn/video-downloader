<template>
  <div class="w-100 h-100 main-content p-3 flex bg-gray-50">
    <div class="w-100 h-100 main-container">
      <div class="video-frame">
        <iframe
          width="100%"
          :height="440"
          :src="fitUrl ? fitUrl.url : ''"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-content">
        <div class="content-tool-bar my-3" v-show="fitUrl">
          <div style="width: 100px; height: 40px;">
            <v-select
              
              label="Qualify"
              v-on:change="changeQuality()"
              v-model="selectedQuality"
              v-bind:items = qualify
              dense
              solo
              v-on:click="check()"
            ></v-select>
          </div>
          
        </div>
        <div class="video-name" v-show="detail.title">
          <div class="title-1">
            {{ detail.title }} | {{ detail.ownerChannelName }}
          </div>
          <div class="sub-title py-3" v-show="detail.viewCount">
            {{ detail.viewCount }} views - {{ detail.publishDate }}
          </div>
        </div>
        <div class="description">
          {{ detail.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Content",
  components: {},
  data: function() {
    return {
      mainVideoUrl: "",
      qualify: ["360p", "480p", "hd720", "1080p"],
      selectedQuality: "hd720",
      selectedUrl: null,
    };
  },
  methods: {
    changeQuality() {
      this.$store.state.quality = this.selectedQuality;
    },
    check() {
      console.log(this.videoQuality)
    }
  },
  computed: {
    ...mapGetters({
      listVideo: "listVideo",
      fitUrl: "getFitVideo",
      detail: "getVideoDetail",
      videoQuality: "getVideoQuality"
    }),
  },
};
</script>
<style lang="scss" scoped>
.main-content {
  // background-color: #e5e6eb;
  display: flex;
  max-height: calc(100vh - 60px);
  .main-container {
    flex: 1;
    padding: 8px;
    overflow: auto;
    .title-1 {
      font-size: 1.4em;
      font-weight: 400;
    }
    .sub-title {
      font-size: 14px;
    }
    .video-content {
      .content-tool-bar {
        width: 100%;
        display: flex;
        align-items: center;
      }
    }
    .video-frame {
      width: 100%;
      min-height: 400px;
    }
  }
}
</style>
