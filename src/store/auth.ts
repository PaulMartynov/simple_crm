import { auth } from '@/api/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { VuexAction } from '@/types/vuex-type.d';

export default {
  actions: {
    async loginOnServer(
      { dispatch, commit }: VuexAction,
      { email, password }: LoginData,
    ) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err: any) {
        throw new Error(err.code);
      }
    },
    async registerOnServer(
      { dispatch, commit }: VuexAction,
      { email, password }: LoginData,
    ) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err: any) {
        throw new Error(err.code);
      }
    },
    async logoutFromServer({ dispatch, commit }: VuexAction) {
      try {
        await signOut(auth);
      } catch (err: any) {
        throw new Error(err.code);
      }
    },
  },
};
