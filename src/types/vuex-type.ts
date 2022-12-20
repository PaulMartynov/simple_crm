import { Commit, Dispatch } from "vuex";

export type VuexAction = {
  dispatch: Dispatch;
  commit: Commit;
};

export type UserInfo = {
  name: string;
  bill: number;
};

export type UserStateInfo = {
  info: UserInfo | null;
};
