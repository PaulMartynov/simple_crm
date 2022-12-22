import { UserInfo, UserStateInfo, VuexAction } from "@/types/vuex-type";
import { ref, get } from "firebase/database";
import { database } from "@/api/firebase/firebase";

export default {
  state: {
    info: null,
  },
  mutations: {
    setInfo(state: UserStateInfo, info: UserInfo) {
      state.info = info;
    },
    clearInfo(state: UserStateInfo) {
      state.info = null;
    },
  },
  actions: {
    async fetchUserInfo({ dispatch, commit }: VuexAction) {
      const userID = await dispatch("getUserId");
      if (userID) {
        try {
          const infoData = await get(ref(database, `/users/${userID}/info`));
          commit("setInfo", infoData.toJSON());
        } catch (err: any) {
          commit("setError", err);
          throw new Error(err.code);
        }
      }
    },
  },
  getters: {
    info: (state: UserStateInfo) => state.info,
  },
};
