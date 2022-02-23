/// <reference types="vite/client" />

interface ImportMetaEnv
    extends Readonly<Record<string, string | boolean | undefined>> {
    readonly VITE_APP_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
