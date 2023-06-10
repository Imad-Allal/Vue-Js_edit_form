<template>
  <div class="container">
    <h1 class="title">My anime list</h1>
    <anime-cards @edit-anime="openEditModal"></anime-cards>

    <b-modal id="edit-modal" title="Éditer l'anime" @ok="saveEditedAnime">
      <anime-edit-form :anime="selectedAnime"></anime-edit-form>
    </b-modal>
  </div>
</template>

<script>
import AnimeCards from "@/components/AnimeCards.vue";
import AnimeEditForm from "@/components/AnimeEditForm.vue";

export default {
  components: {
    AnimeCards,
    AnimeEditForm,
  },
  data() {
    return {
      selectedAnime: null,
    };
  },
  methods: {
    openEditModal(anime) {
      this.selectedAnime = anime;
      this.$bvModal.show('edit-modal');
    },
    saveEditedAnime() {
      this.selectedAnime = null;
      this.$bvModal.hide('edit-modal');
    },
  },
};
</script>

<style>
</style>
