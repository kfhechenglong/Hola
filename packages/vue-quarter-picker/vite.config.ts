import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        target: "modules",
        outDir: 'es',
        minify: false,
        // cssCodeSplit: true,
        rollupOptions: {
            // 忽略的打包文件
            external: ['vue', 'ant-design-vue', 'Popover', 'Icon', 'Input'],
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
        dts({
            // 默认会打包到es文件夹下
            tsConfigFilePath: './../../tsconfig.json'
        }),
        dts({
            outputDir: 'lib',
            tsConfigFilePath: './../../tsconfig.json'
        })
    ]
})