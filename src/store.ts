import { createPinia } from "pinia";

export const store = createPinia();


(window as any).store = store.state;