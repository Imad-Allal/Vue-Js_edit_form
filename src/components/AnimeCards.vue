<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4" v-for="(anime, index) in animeList" :key="index">
      <anime-card :anime="anime" @edit-anime="editAnime"></anime-card>
    </div>
    <b-modal v-model="showEditModal" title="Edit Anime">
      <anime-form :anime="selectedAnime" @save-anime="saveAnime"></anime-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AnimeCard from "./AnimeCard.vue";
import AnimeForm from "./AnimeForm.vue";

export default {
  components: {
    AnimeCard,
    AnimeForm,
  },
  computed: {
    ...mapGetters(["animeList"]),
  },
  data() {
    return {
      showEditModal: false,
      selectedAnime: null,
    };
  },
  methods: {
    ...mapActions(["updateAnime"]),
    editAnime(anime) {
      this.selectedAnime = { ...anime };
      this.showEditModal = true;
    },
    saveAnime(updatedAnime) {
      // Update the anime in the list
      this.updateAnime(updatedAnime);
      this.showEditModal = false;
    },
  },
};
</script>

<style>
</style>
