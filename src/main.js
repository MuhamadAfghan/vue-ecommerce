import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// We need to define the semantic override.
// Actually, let's do it properly by extending the preset.
// Ideally we import { definePreset } from '@primevue/themes';
// But let's try injecting the semantic color override directly if allowed or use CSS variables if simpler.
// PrimeVue v4 uses CSS variables for semantic colors.
// We can override them in a global CSS or inside the config.
// Let's modify the config to override 'primary' palette.

import { definePreset } from '@primevue/themes'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f9f9f9',
      100: '#f3f3f3',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
  },
})

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: false,
      cssLayer: false,
    },
  },
})

app.mount('#app')
