/** Вибійка · «Фанера» — Tailwind theme. Значення беруться з CSS-змінних (vybiyka-tokens.css),
 *  тож світла й темна теми перемикаються атрибутом data-theme без dark:-класів. */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    screens: { md: '641px', lg: '1025px', xl: '1440px' }, // телефон ≤640 — база
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: { DEFAULT: 'var(--color-surface)', 2: 'var(--color-surface-2)' },
        fg: { DEFAULT: 'var(--color-text)', 2: 'var(--color-text-2)', 3: 'var(--color-text-3)' },
        line: { DEFAULT: 'var(--color-line)', strong: 'var(--color-line-strong)' },
        'border-input': 'var(--color-border-input)',
        primary: {
          DEFAULT: 'var(--color-primary)', hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)', soft: 'var(--color-primary-soft)', fg: 'var(--color-on-primary)',
        },
        accent: { DEFAULT: 'var(--color-accent)', soft: 'var(--color-accent-soft)' },
        success: { DEFAULT: 'var(--color-success)', soft: 'var(--color-success-soft)' },
        warning: { DEFAULT: 'var(--color-warning)', soft: 'var(--color-warning-soft)' },
        danger: {
          DEFAULT: 'var(--color-danger)', hover: 'var(--color-danger-hover)',
          soft: 'var(--color-danger-soft)', fg: 'var(--color-on-danger)',
        },
        info: { DEFAULT: 'var(--color-info)', soft: 'var(--color-info-soft)' },
        focus: 'var(--color-focus)',
        overlay: 'var(--color-overlay)',
        seg: {
          new: 'var(--color-seg-new)', regular: 'var(--color-seg-regular)', wholesale: 'var(--color-seg-wholesale)',
          learning: 'var(--color-seg-learning)', inactive: 'var(--color-seg-inactive)',
        },
      },
      fontFamily: {
        sans: ['Commissioner', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: ['12px', '16px'], sm: ['13px', '18px'], base: ['15px', '22px'], md: ['17px', '26px'],
        lg: ['20px', '28px'], xl: ['24px', '30px'], '2xl': ['32px', '38px'], '3xl': ['40px', '46px'],
      },
      fontWeight: { heading: '650' },
      // spacing: стандартна шкала Tailwind уже має крок 4 px (1 = 4px, 4 = 16px …)
      borderRadius: { sm: '6px', md: '10px', lg: '14px', xl: '18px', full: '999px' },
      boxShadow: { 1: 'var(--shadow-1)', 2: 'var(--shadow-2)' },
      zIndex: { sticky: '10', nav: '20', drawer: '40', modal: '50', popover: '60', toast: '70', tooltip: '80' },
      transitionDuration: { fast: '120ms', base: '180ms', slow: '280ms' },
      transitionTimingFunction: { out: 'cubic-bezier(.2,.8,.2,1)', 'in-out': 'cubic-bezier(.4,0,.2,1)' },
      maxWidth: { prose: '720px', list: '1200px' },
      height: { row: '48px', touch: '48px', btn: '40px', 'btn-sm': '32px', 'btn-lg': '48px' },
      minHeight: { row: '48px', touch: '48px' },
      ringColor: { DEFAULT: 'var(--color-focus)' },
    },
  },
};
