import type { App, Plugin } from 'vue';

export type SFCWidthInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
  (component as SFCWidthInstall<T>).install = (app: App) => {
    const { name } = component as unknown as { name: string };
    app.component(name, component);
  };
  return component as SFCWidthInstall<T>;
};
