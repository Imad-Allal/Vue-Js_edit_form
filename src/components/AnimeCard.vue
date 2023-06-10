<template>
  <b-card
    :title="anime.title"
    :img-src="anime.imgUrl"
    :img-alt="`${anime.title}-Image`"
    img-top
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text> Number of episodes: {{ anime.episodes }} </b-card-text>
    <b-card-text> Status: {{ anime.status }} </b-card-text>

    <b-button @click="editAnime" variant="outline-primary">Edit</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      default: function () {
        return {
          title: "",
          episodes: 0,
          status: null,
          imgUrl: "",
        };
      },
    },
  },
  methods: {
    editAnime() {
      this.$emit("edit-anime", this.anime);
    },
  },
};
</script>

<style>
</style>
