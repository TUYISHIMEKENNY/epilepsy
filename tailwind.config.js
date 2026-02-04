/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* purple-700/20 */
        input: "var(--color-input)", /* slate-50 */
        ring: "var(--color-ring)", /* purple-700 */
        background: "var(--color-background)", /* soft-white */
        foreground: "var(--color-foreground)", /* gray-800 */
        primary: {
          DEFAULT: "var(--color-primary)", /* purple-700 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* purple-400 */
          foreground: "var(--color-secondary-foreground)", /* gray-800 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-50 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* amber-500 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-800 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* slate-50 */
          foreground: "var(--color-card-foreground)", /* gray-800 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        brand: {
          violet: "var(--color-brand-violet)", /* blue-violet */
          'violet-foreground': "var(--color-brand-violet-foreground)", /* white */
          'medium-purple': "var(--color-brand-medium-purple)", /* medium-purple */
          'medium-purple-foreground': "var(--color-brand-medium-purple-foreground)", /* white */
          coral: "var(--color-brand-coral)", /* coral-red */
          'coral-foreground': "var(--color-brand-coral-foreground)", /* white */
          turquoise: "var(--color-brand-turquoise)", /* turquoise */
          'turquoise-foreground': "var(--color-brand-turquoise-foreground)", /* gray-800 */
          emerald: "var(--color-brand-emerald)", /* emerald-green */
          'emerald-foreground': "var(--color-brand-emerald-foreground)", /* white */
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        cta: ['var(--font-cta)', 'sans-serif'],
        accent: ['var(--font-accent)', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-base)",
        sm: "calc(var(--radius-base) - 4px)",
      },
      boxShadow: {
        'brand': 'var(--shadow-soft)',
        'card': 'var(--shadow-card)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "pulse-gentle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}