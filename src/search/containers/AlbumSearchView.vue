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

<script lang="ts">
import { NavigationGuardWithThis } from "vue-router";

const loader: NavigationGuardWithThis<any> = async (to, _, next) => {
  const { data } = await musicAPI.get("search", {
    params: { type: "album", q: to.query["q"] },
  });
  next((comp) => {
    comp.query = String(to.query["q"]);
    comp.albums = data;
  });
};

export default defineComponent({
  beforeRouteEnter: loader,
  beforeRouteUpdate: loader,
});
</script>

<script setup lang="ts">
import ResultsGrid from "../components/ResultsGrid.vue";
import SearchForm from "../components/SearchForm.vue";

import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import { musicAPI } from "../../common/services/musicAPI";

const { push } = useRouter();

// Before Nagivate:
const albums = ref([]);
const query = ref("");
defineExpose({
  albums: [],
  query: "",
});

// After Nagivate:
// const route = useRoute();
// const query = computed(() => String(route.query["q"]));
// const { data: albums, error } = useAlbumSearch(query);

const search = (q: string) => {
  push({
    name: "AlbumSearch",
    query: { q },
  });
};
</script>

<style scoped></style>
