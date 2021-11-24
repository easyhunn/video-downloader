<template>

</template>
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
  },
  computed: {
    ...mapGetters({
      listVideo: "listVideo",
      fitUrl: "getFitVideo",
      detail: "getVideoDetail",
    }),
  },
};
</script>