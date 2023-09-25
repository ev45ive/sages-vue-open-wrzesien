<template>
  <div>
    <div class="list-group">
      <!-- :class="["list-group-item list-group-item-action",{ active: playlist.id === selectedId }]" -->
      <button
        v-for="(playlist, index) of playlists"
        :key="playlist.id"
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: playlist.id === selectedId }"
        @click="select(playlist.id)"
      >
        {{ index + 1 }}. {{ playlist.name }}
      </button>
    </div>
    <p class="text-center text-muted" v-if="!playlists.length">No playlists</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRef, toRefs } from "vue";
import { Playlist } from "../../common/model/Playlist";

// defineProps(['playlists'])
// const props = defineProps({
//   playlists: {
//     default: [] as Playlist[],
//     type: Array as PropType<Playlist[]>,
//   },
// });

const props = defineProps<{ playlists: Playlist[] }>();

// const playlists = props.playlists; // Not-Reactive!

// const playlists = toRef(props,'playlists')
// playlists.value

const { playlists } = toRefs(props);
playlists.value;

// const playlists = ref<Playlist[]>([]);

const selectedId = ref("234");

const select = (id: string) => {
  selectedId.value = id;
};
</script>

<!-- <script2 lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Playlist } from "../../common/model/Playlist";

export default defineComponent({
  // props:['playlists'],
  props: {
    playlists: {
      default: [] as Playlist[],
      type: Array as PropType<Playlist[]>,
    },
  },
  setup(props) {
    const playlists = props.playlists;
    const selectedId = ref("234");

    const select = (id: string) => {
      selectedId.value = id;
    };
    return { playlists, select, selectedId };
  },
});
</script2> -->

<style scoped></style>
