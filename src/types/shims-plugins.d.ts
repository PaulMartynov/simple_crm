import Store from "@/store/index"; // path to store file

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
    $message: (html: string) => void;
    $error: (html: string) => void;
  }
}
