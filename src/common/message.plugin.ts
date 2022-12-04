import { App } from 'vue';
/* eslint-disable */
export default {
  install: (app: App<Element>, options: any) => {
    app.config.globalProperties.$message = (html: string) => {
      // @ts-ignore
      M.toast({ html });
    };
    app.config.globalProperties.$error = (html: string) => {
      // @ts-ignore
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
