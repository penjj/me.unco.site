import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import mdx from '@astrojs/mdx'
import unocss from 'unocss/astro'

import { presetDaisy } from 'unocss-preset-daisy'
import {
  presetAttributify,
  presetIcons,
  presetWebFonts,
  transformerVariantGroup,
  presetUno,
} from 'unocss'

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  integrations: [
    mdx(),
    solid(),
    unocss({
      injectReset: true,
      shortcuts: {
        'h-text': 'text-gray-4 dark:text-gray-6',
        'h-text-hl': 'text-gray-7 dark:text-gray-4',
      },
      transformers: [transformerVariantGroup()],
      presets: [
        presetDaisy({
          themes: ['light', 'dark'],
        }),
        presetAttributify(),
        presetUno({
          dark: {
            light: '[data-theme=light]',
            dark: '[data-theme=dark]',
          },
        }),
        presetIcons({
          autoInstall: true,
        }),
        presetWebFonts(),
      ],
    }),
  ],
})