import { Commit, Dispatch } from 'vuex';

export type VuexAction = {
  dispatch: Dispatch,
  commit: Commit
}
