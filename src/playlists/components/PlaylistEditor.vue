d
<template>
  <div>
    <Form
      @submit="submit"
      :initial-values="props.playlist"
      :validation-schema="playlistFormSchema"
      v-slot="{ errors, controlledValues, meta }"
    >
<!-- const {errors, controlledValues, meta} = useForm({initialValue:props.playlist, :validationSchema="playlistFormSchema" }) -->

      <!-- <pre>{{ playlist }}</pre>
      <pre>{{ controlledValues }}</pre>
      <pre>{{ errors }}</pre>
      <pre>{{ meta }}</pre> -->

      <div class="mb-3">
        <label for="playlistName" class="form-label">Name</label>

        <Field
          type="text"
          class="form-control"
          id="playlistName"
          name="name"
          validate-on-input
        />
        <ErrorMessage name="name" class="text-danger" />
        <div class="form-text text-muted float-end">
          {{ controlledValues.name?.length }} / 100
        </div>
      </div>

      <div class="mb-3 form-check">
        <Field
          type="checkbox"
          class="form-check-input"
          id="playlistPublic"
          name="public"
        />
        <label class="form-check-label" for="playlistPublic">Public</label>
      </div>

      <div class="mb-3">
        <label for="playlistDescription" class="form-label">Description</label>
        <Field
          as="textarea"
          class="form-control"
          id="playlistDescription"
          rows="3"
          name="description"
        ></Field>
      </div>

      <button class="btn btn-danger" @click="$emit('cancel')">Cancel</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { Playlist } from "../../common/model/Playlist";
import { Form, Field, ErrorMessage } from "vee-validate";
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

const playlistFormSchema = toTypedSchema(
  z.object({
    id: z.string(),
    name: z
      .string()
      .nonempty({ message: "Name required" })
      .min(3, { message: "Name too short" }),
    public: z.boolean(),
    description: z.string(),
  })
);

const submit = (values: {}) => {
  const draft = {
    ...EMPTY_PLAYLIST,
    ...props.playlist,
    ...values,
  };
  $emit("save", draft);
};
</script>

<style scoped></style>
