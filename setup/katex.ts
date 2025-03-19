import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
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
}) 