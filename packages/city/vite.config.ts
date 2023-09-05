import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
    build: {
        target: 'modules',
        outDir: 'es',
        minify: false,
        // cssCodeSplit: true,
        rollupOptions: {
            // 忽略的打包文件
            input: ['index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].mjs',
                    preserveModules: true,
                    dir: 'es',
                    preserveModulesRoot: 'utils',
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].cjs',
                    preserveModules: true,
                    dir: 'lib',
                    preserveModulesRoot: 'utils',
                },
            ],
        },
        lib: {
            entry: './index.ts',
            formats: ['es', 'cjs'],
        },
    },
    plugins: [
        eslint(),
        dts({
            exclude: ['./es', './lib'],
            outputDir: ['lib', 'es'],
        }),
    ],
})
