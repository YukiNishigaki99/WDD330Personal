import {
    resolve
} from "path";
import {
    defineConfig
} from "vite";

export default defineConfig({
    root: "src/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                // favorite: resolve(__dirname, "src/favorite/index.html"),
                menu: resolve(__dirname, "src/menu_pages/index.html"),
            },
        },
    },
});