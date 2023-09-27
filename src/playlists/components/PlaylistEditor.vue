d
<template>
  <div>
    <pre>{{ playlist }}</pre>
    <pre>{{ draft }}</pre>
    <pre>{{ errors }}</pre>

    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="playlistName" class="form-label">Name</label>

        <input
          type="text"
          class="form-control"
          id="playlistName"
          ref="playlistNameRef"
          v-bind="name"
        />
        <div class="form-text text-muted float-end">
          {{ draft.name?.length }} / 100
        </div>
        <p class="text-danger" v-if="errors.name">{{ errors.name }}</p>
      </div>

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="playlistPublic"
          v-bind="isPublic"
        />
        <label class="form-check-label" for="playlistPublic">Public</label>
      </div>

      <div class="mb-3">
        <label for="playlistDescription" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="playlistDescription"
          rows="3"
          v-bind="description"
        ></textarea>
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
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { EMPTY_PLAYLIST } from "../../common/EMPTY_PLAYLIST";

const props = defineProps<{
  playlist?: Playlist;
}>();

const $emit = defineEmits<{
  (e: "cancel"): void;
  (e: "save", p: Playlist): void;
}>();

const playlistNameRef = ref<HTMLInputElement>();
useFocus(playlistNameRef, { initialValue: true });

// Creates a typed schema for vee-validate
const playlistFormSchema = toTypedSchema(
  z.object({
    name: z
      .string()
      .nonempty({ message: "Name required" })
      .min(3, { message: "Name too short" }),
    public: z.boolean(),
    description: z.string(),
  })
);

const { 
  defineInputBinds,
  submitForm,
  controlledValues: draft,
  errors,
  meta,
} = useForm({
  initialValues: props.playlist || EMPTY_PLAYLIST,
  validationSchema: playlistFormSchema,
});
// watch(()=>props.playlist, () => props.playlist && resetForm(props.playlist));

const name = defineInputBinds("name", { validateOnInput: true });
const isPublic = defineInputBinds("public", {
  validateOnInput: true,
  // Checkbox:
  mapAttrs(state) {
    return { checked: state.value };
  },
});
const description = defineInputBinds("description", { validateOnInput: true });

const submit = async (e: Event) => {
  await submitForm(e);
  if (!meta.value.valid) return;

  $emit("save", {
    ...EMPTY_PLAYLIST,
    ...props.playlist,
    ...draft.value,
  });
};
</script>

<style scoped></style>
