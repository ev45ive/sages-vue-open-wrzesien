<template>
  <div>
    <div class="row">
      <div class="col">
        <SearchForm 
          @search="search($event)" 
          :query="query" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="alert alert-danger" v-if="error?.message">
          {{ error.message }}
        </p>
        <ResultsGrid :albums="albums" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAlbumSearch } from "../../common/composables/useAlbumSearch";
import ResultsGrid from "../components/ResultsGrid.vue";
import SearchForm from "../components/SearchForm.vue";

const query = ref("batman");

const { data: albums, error } = useAlbumSearch(query);

const search = (q: string) => (query.value = q);
</script>

<style scoped></style>
