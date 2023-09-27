d
<template>
  <div>
    <pre>{{ playlist }}</pre>
    <pre>{{ draft }}</pre>

    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="playlistName" class="form-label">Name</label>

        <input
          type="text"
          class="form-control"
          id="playlistName"
          ref="playlistNameRef"
          v-model="draft.name"
        />
        {{ focused && "focused!" }}
        <div class="form-text text-muted float-end">
          {{ draft.name.length }} / 100
        </div>
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="playlistPublic"
          v-model="draft.public"
        />
        <label class="form-check-label" for="playlistPublic">Public</label>
      </div>
      <div class="mb-3">
        <label for="playlistDescription" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="playlistDescription"
          rows="3"
          v-model="draft.description"
        ></textarea>
      </div>

      <div class="mb-3">
        <input type="radio" v-model="picked" value="a" />
        <input type="radio" v-model="picked" value="b" />
        {{ picked }}
      </div>
      <div class="mb-3">
        <input
          type="checkbox"
          v-model="toggle"
          true-value="yes"
          false-value="no"
        />
        {{ toggle }}
      </div>
      <div class="mb-3">
        <input type="checkbox" v-model="namesList" value="Jack" /> Jack
        <input type="checkbox" v-model="namesList" value="Jim" /> Jim
        <input type="checkbox" v-model="namesList" value="Johnny" /> Johnny
        {{ namesList }}
      </div>
      <div class="mb-3">
        <select v-model="selected">
          <option value="abc">ABC</option>
          <option value="cba">cba</option>
          <option value="xyz">xyz</option>
        </select>
        {{ selected }}
      </div>

      <button class="btn btn-danger" @click="$emit('cancel')">Cancel</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import { Playlist } from "../../common/model/Playlist";
import { useFocus } from "../../common/composables/useFocus";
import { useDraftFrom } from "../../common/composables/useDraftFrom";
import { EMPTY_PLAYLIST } from "../../common/EMPTY_PLAYLIST";

const props = defineProps<{
  playlist?: Playlist;
}>();

// const wrapped = ref(ref(ref(true))) // Ref<true>

const picked = ref('a')
const toggle = ref('yes')
const namesList = ref([])
const selected = ref('xyz')

const $emit = defineEmits<{
  (e: "cancel"): void;
  (e: "save", p: Playlist): void;
}>();

const playlistNameRef = ref<HTMLInputElement>();

const { focused } = useFocus(playlistNameRef, { initialValue: true });

const draft = useDraftFrom(() => props.playlist, EMPTY_PLAYLIST);

const submit = () => $emit("save", draft.value);
</script>

<style scoped></style>
