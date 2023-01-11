import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint"

export default defineConfig({
    build: {
        target: "modules",
        outDir: 'es',
        minify: false,
        // cssCodeSplit: true,
        rollupOptions: {
            // 忽略的打包文件
            external: ['vue'],
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    dir:'es',
                    preserveModulesRoot: 'src'
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    dir: 'lib',
                    preserveModulesRoot: 'src'
                }
            ]
        },
        lib: {
            entry: './index.ts',
            formats: ['es', 'cjs']
        }
    },
    plugins: [
        vue(),
        eslint(),
        dts({
            // 默认会打包到es文件夹下
            include: './src',
            tsConfigFilePath: './../../tsconfig.json'
        }),
        dts({
            outputDir: 'lib',
            include: './src',
            tsConfigFilePath: './../../tsconfig.json'
        })
    ]
})