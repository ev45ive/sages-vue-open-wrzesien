import { InjectionKey, Ref } from "vue";
import { UserProfile } from "../common/model/User";

export const USER_TOKEN: InjectionKey<{
  user?: Ref<UserProfile>;
  login: () => void;
  logout: () => void;
}> = Symbol("USER_TOKEN");
