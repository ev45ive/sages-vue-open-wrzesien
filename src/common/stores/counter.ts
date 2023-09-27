import { ref, toRefs } from "vue";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});

// export const useCounterStore = defineStore("counter", {
//   state: () => ({
//     count: 0,
//     name: "Eduardo",
//   }),
//   getters: {
//     doubleCount: (state) => state.dcount * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// defineComponent({
//     data:()=> ({}), // state
//     methods:{ }, // actions
//     computed:{ } // getters
// })
