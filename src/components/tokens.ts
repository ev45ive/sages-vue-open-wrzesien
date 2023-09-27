import { InjectionKey, Ref, inject } from "vue";
import { UserProfile } from "../common/model/User";

export const USER_TOKEN: InjectionKey<{
  user: Ref<UserProfile | undefined>;
  login: () => void;
  logout: () => void;
}> = Symbol("USER_TOKEN");

export const useUser = () => {
  const userContext = inject(USER_TOKEN);
  if (!userContext) throw new Error("missing user Context provider");

  const { user } = userContext;

  return user;
};
