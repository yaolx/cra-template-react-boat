/**
 * vite plugin
 */

import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript'
import legacy from '@vitejs/plugin-legacy'
import reactRefresh from '@vitejs/plugin-react'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import viteCompression from 'vite-plugin-compression'

import configStyleImportPlugin from './styleImport'
import configVisualizerPlugin from './visualizer'

import { VITE_APP_ANALYZE, VITE_APP_COMPRESS_GZIP } from '../../constant'

export function createVitePlugins(viteEnv: string, isBuild: boolean) {
  const vitePlugins = [
    {
      ...eslint({
        include: 'src/**/*.+(js|jsx)'
      }),
      enforce: 'pre'
    },
    typescript(),
    reactRefresh(),
    legacy(),
    configStyleImportPlugin()
  ]
  // 分包
  // 分包后，首页1.7M的文件，现在只有800K
  isBuild &&
    vitePlugins.push(
      chunkSplitPlugin({
        strategy: 'default',
        customSplitting: {
          'react-vendor': ['react', 'react-dom'],
          lodash: ['lodash']
        }
      })
    )
  // 包分析
  VITE_APP_ANALYZE && vitePlugins.push(configVisualizerPlugin())

  // 发布，打包
  if (VITE_APP_COMPRESS_GZIP && isBuild) {
    vitePlugins.push(viteCompression({ deleteOriginFile: true }))
  }

  return vitePlugins
}
