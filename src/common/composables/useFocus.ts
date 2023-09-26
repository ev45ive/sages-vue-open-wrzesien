import { Ref, ref, onMounted, onUnmounted } from "vue";

export function useFocus(
  elem: Ref<HTMLElement | undefined>,
  options?: { initialValue: boolean }
) {
  const focused = ref(false);

  const updateFocus = () => {
    focused.value = document.activeElement == elem.value;
  };

  onMounted(() => {
    options?.initialValue && elem.value?.focus();

    window.addEventListener("focus", updateFocus, { capture: true });
    window.addEventListener("blur", updateFocus, { capture: true });
  });

  onUnmounted(() => {
    window.removeEventListener("focus", updateFocus, { capture: true });
    window.removeEventListener("blur", updateFocus, { capture: true });
  });

  return { focused };
}
