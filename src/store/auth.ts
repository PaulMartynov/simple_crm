import { auth, database } from "@/api/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, set } from "firebase/database";
import { VuexAction } from "@/types/vuex-type";

export default {
  actions: {
    async loginOnServer({ commit }: VuexAction, { email, password }: LoginData) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err: any) {
        commit("setError", err);
        throw new Error(err.code);
      }
    },
    async registerOnServer(
      { dispatch, commit }: VuexAction,
      { email, password, name }: NewUserData
    ) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const userID = await dispatch("getUserId");
        if (userID) {
          await set(ref(database, `/users/${userID}/info`), { bill: 10000, name });
        }
      } catch (err: any) {
        commit("setError", err);
        throw new Error(err.code);
      }
    },
    getUserId() {
      return auth.currentUser?.uid ?? null;
    },
    async logoutFromServer({ commit }: VuexAction) {
      try {
        await signOut(auth);
        commit("clearInfo");
      } catch (err: any) {
        commit("setError", err);
        throw new Error(err.code);
      }
    },
  },
};
