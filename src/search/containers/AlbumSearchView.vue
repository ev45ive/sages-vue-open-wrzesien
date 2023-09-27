<template>
  <div>
    <div class="row">
      <div class="col">
        <SearchForm
          class="form-control"
          placeholder="Search"
          @search="search($event)"
          :query="query"
        />
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
import { useAlbumSearch } from "../../common/composables/useAlbumSearch";
import ResultsGrid from "../components/ResultsGrid.vue";
import SearchForm from "../components/SearchForm.vue";

import {
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";
import { computed } from "vue";

defineExpose({
  placki: 123,
});
const { push } = useRouter();

onBeforeRouteUpdate((to, from, next) => {
  next()
});

onBeforeRouteLeave((to, from, next) => {
next({name:'Login'})
});

const route = useRoute();
const query = computed(() => String(route.query["q"]));

const { data: albums, error } = useAlbumSearch(query);

const search = (q: string) => {
  push({
    name: "AlbumSearch",
    query: { q },
  });
};
</script>

<style scoped></style>
