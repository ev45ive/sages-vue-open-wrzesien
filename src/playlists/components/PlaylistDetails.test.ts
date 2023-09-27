// @vitest-environment jsdom
// jsdom - fake DOM

import { expect, test, vi } from "vitest";
import { mount, shallowMount, renderToString } from "@vue/test-utils";
import PlaylistDetails from "./PlaylistDetails.vue";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";

vi.mock("../../common/composables/useAlbumSearch", () => {
  return {
    usePlaylist: vi.fn().mockReturnValue({ name: "fake" }),
  };
});

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("Render empty details", () => {
  const wrapper = mount(PlaylistDetails, {
    props: {},
  });
  expect(wrapper.text()).toMatch("No playlist selected");
});

test("Render example playlist details", () => {
  const playlist = mockPlaylists[0];
  const wrapper = mount(PlaylistDetails, {
    props: {
      playlist: playlist,
    },
  });
  //   console.log(wrapper.html());
  //   expect(wrapper.find('.card-title').text()).toMatch("Playlist A");
  expect(wrapper.find(".card-title").text()).toMatch(playlist.name);
});

test("mocking modules", () => {
  const playlist = mockPlaylists[0];
  const wrapper = mount(PlaylistDetails, {
    props: {
      playlist: playlist,
    },
  });
  console.log(wrapper.html());
});

test("Emit on edit button click", () => {
  const playlist = mockPlaylists[0];
  const wrapper = mount(PlaylistDetails, {
    props: {
      playlist: playlist,
    },
  });

  //   console.log(wrapper.html());

  const btn = wrapper.find("button");
  expect(btn.text()).toMatch("Edit");

  btn.trigger("click");

  expect(wrapper.emitted("edit")).toHaveLength(1);
  expect(wrapper.emitted("edit")?.[0]).toEqual([playlist.id]);
});
