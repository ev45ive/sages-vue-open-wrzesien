<template>
  <div>
    <div v-if="album">
      <div class="row">
        <div class="col">
          <h1 class="display-3">{{ album.name }}</h1>
          <small class="text-muted">{{ albumId }}</small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AlbumCard :album="album" />
        </div>
        <div class="col">
          <dl>
            <dt>Artist</dt>
            <dd>{{ album.artists[0].name }}</dd>
            <dt>Release date</dt>
            <dd>{{ album.release_date }}</dd>
            <dt>Tracks</dt>
            <dd>{{ album.total_tracks }}</dd>
          </dl>

          <audio
            class="w-100 my-2"
            controls
            ref="audioRef"
            :src="vm.currentTrack?.preview_url"
          />

          <div class="list-group">
            <div
              class="list-group-item"
              v-for="(track, index) in album.tracks.items"
              :key="track.id"
              @click="play(track)"
            >
              {{ index + 1 }}. {{ track.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Loader from "../../components/Loader.vue";
import AlbumCard from "../components/AlbumCard.vue";
import { useAlbum } from "../../common/composables/useAlbumSearch";
import { computed, nextTick, reactive, ref } from "vue";
import { Track } from "../../common/model/Album";

// http://localhost:5173/music/albums/5Tby0U5VndHW0SomYO7Id7

const { params } = useRoute();
const albumId = computed(() => params["albumId"]?.toString());

const { data: album } = useAlbum(albumId);

const audioRef = ref<HTMLAudioElement>();

const vm = reactive<{
  currentTrack?: Track;
}>({});

const play = async (track: Track) => {
  vm.currentTrack = track;

  if (!audioRef.value) return;
  await nextTick();

  audioRef.value.volume = 0.2;
  audioRef.value.play();
};
</script>

<style scoped></style>
