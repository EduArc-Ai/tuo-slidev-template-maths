import { ShikiSetupReturn, defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async () => {
  return {
    theme: {
      dark: 'dark-plus',
      light: 'light-plus',
    },
  } as ShikiSetupReturn;
});
