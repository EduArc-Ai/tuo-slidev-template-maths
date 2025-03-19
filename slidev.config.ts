import { defineConfig } from '@slidev/types'

export default defineConfig({
  // theme: 'default',
  // Configure markdown and math rendering
  markdown: {
    math: 'katex',
    katex: {
      trust: true,
      strict: false,
      throwOnError: false,
      globalGroup: true,
      macros: {
        '\\R': '\\mathbb{R}',
        '\\N': '\\mathbb{N}',
        '\\Z': '\\mathbb{Z}',
        '\\vec': '\\boldsymbol',
        '\\mat': '\\mathbf',
        '\\diff': '\\mathrm{d}',
        '\\pd': '\\partial'
      }
    }
  },
  // Auto-register all components in the components directory
  components: {
    dirs: ['./components']
  },
  // Add drawing state management
  vue: {
    data() {
      return {
        isDrawing: false
      }
    },
    methods: {
      toggleDraw() {
        this.isDrawing = !this.isDrawing
      }
    }
  }
}) 