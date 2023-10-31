import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    base: "/e_commerce/",
    plugins: [],
    resolve: {
        /*sommething*/
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
    build: {
        rollupOptions: {
            imput: {
                main: resolve(__dirname,"./index.html"),
                checkout: resolve(__dirname, "./checkout.html"),
                pedidos: resolve(__dirname, "./pedidos.html"),
            },
        },
    },
});