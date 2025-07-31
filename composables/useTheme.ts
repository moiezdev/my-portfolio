import { useState} from "nuxt/app";

export const useTheme = () => {
    const theme = useState<'light' | 'dark'>('theme', () => 'dark')

    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        const root = document.documentElement
        root.classList.toggle('dark', theme.value === 'dark')
    }

    return {
        theme,
        toggleTheme
    }
}
