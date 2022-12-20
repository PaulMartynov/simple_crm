import { CategoryState, VuexAction } from "@/types/vuex-type";
import { ref, push, get } from "firebase/database";
import { database } from "@/api/firebase/firebase";

export default {
  state: {
    categories: [] as Category[],
  },
  actions: {
    async fetchCategories({ commit, dispatch }: VuexAction) {
      try {
        const userID = await dispatch("getUserId");
        if (!userID) {
          return;
        }
        const data = await get(ref(database, `/users/${userID}/categories`));
        const categories = data.toJSON() as { [key: string]: CategoryData } | null;
        if (!categories) {
          return;
        }
        commit(
          "setCategories",
          Object.keys(categories).map((k) => {
            return { ...categories[k], id: k };
          })
        );
      } catch (err: any) {
        commit("setError", err);
        throw new Error(err.code);
      }
    },
    async createCategory({ commit, dispatch }: VuexAction, data: CategoryData) {
      try {
        const userID = await dispatch("getUserId");
        if (!userID) {
          return;
        }
        const category = await push(ref(database, `/users/${userID}/categories`), data);
        if (!category?.key) {
          return;
        }
        commit("addCategory", { ...data, id: category.key });
      } catch (err: any) {
        commit("setError", err);
        throw new Error(err.code);
      }
    },
  },
  mutations: {
    addCategory(state: CategoryState, category: Category) {
      state.categories.push(category);
    },
    setCategories(state: CategoryState, data: Category[]) {
      state.categories = data;
    },
  },
  getters: {
    categories: (state: CategoryState) => state.categories,
  },
};
