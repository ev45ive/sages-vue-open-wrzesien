<template>
  <div>
    <div class="row">
      <div class="col">
        <SearchForm @search="search($event)" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ResultsGrid :albums="data" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAlbumSearch } from "../../common/composables/useAlbumSearch";
import ResultsGrid from "../components/ResultsGrid.vue";
import SearchForm from "../components/SearchForm.vue";

const query = ref("");

const { data } = useAlbumSearch(query);

const search = (q: string) => {
  query.value = q;
};
</script>

<style scoped></style>
