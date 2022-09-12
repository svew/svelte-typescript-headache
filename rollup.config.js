import svelte from 'rollup-plugin-svelte';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from "@rollup/plugin-typescript";
import css from 'rollup-plugin-css-only';
import sveltePreprocess from "svelte-preprocess";

const production = process.argv.includes("prod");

const plugins = [
    svelte({
        //include: 'src/webviews/**/*.svelte',
        compilerOptions: {
            // enable run-time checks when not in production
            dev: !production,
        },
        preprocess: sveltePreprocess(),
    }),

    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    typescript({
        tsconfig: "src/webviews/tsconfig.json",
        sourceMap: !production,
        inlineSources: !production,
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    nodeResolve({
        browser: true,
        dedupe: ['svelte']
    }),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
];

const pageName = "LogViewerPage";
export default {
    //input: "src/extension.ts",
    input: "src/webviews/pages/" + pageName + ".ts",
    output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "out/compiled/" + pageName + ".js",
    },
    plugins: plugins,
    watch: {
        clearScreen: false,
    },
};