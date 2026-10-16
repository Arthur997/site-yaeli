/* Tokens do design system para o Tailwind. Compartilhado por todas as páginas. */
/* Valores transcritos de tokens.json (tema claro). Mudou lá, muda aqui. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: { midnight: '#042A45', slate: '#5D7F98', red: '#981F2D', gold: '#AD8B43', ivory: '#F6F2E8', charcoal: '#0F1D28' },
        surface: { DEFAULT: '#F6F2E8', raised: '#FBF9F3', sunken: '#ECE6D8' },
        line: { DEFAULT: '#DDD5C3', strong: '#5D7F98' },
        ink: { DEFAULT: '#0F1D28', muted: '#4A5B68', subtle: '#5B6B77', invert: '#F6F2E8', invertmuted: '#B4C3CF' },
        action: { DEFAULT: '#042A45', hover: '#0A3A5C', ink: '#042A45', subtle: '#E3E8EA' },
        accent: { DEFAULT: '#AD8B43', ink: '#8A6A24' },
        /* Sobre azul-marinho valem os tokens do tema escuro. */
        navy: { raised: '#0B3554', line: '#1B4563', action: '#AD8B43', actionhover: '#C4A25A', accentink: '#D9BC7A' },
        danger: '#981F2D'
      },
      fontFamily: {
        display: ['Cinzel', '"Trajan Pro"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'Baskerville', 'Georgia', 'serif']
      },
      fontSize: {
        'display-xl': ['56px', { lineHeight: '64px', letterSpacing: '0.02em' }],
        'display-l': ['40px', { lineHeight: '48px', letterSpacing: '0.02em' }],
        'display-m': ['32px', { lineHeight: '40px', letterSpacing: '0.03em' }]
      },
      borderRadius: { xs: '2px', sm: '4px', md: '6px', lg: '10px', xl: '16px', '2xl': '24px' },
      boxShadow: {
        xs: '0 1px 2px rgba(15,29,40,.06)',
        sm: '0 2px 8px rgba(15,29,40,.08)',
        md: '0 10px 28px rgba(15,29,40,.10)'
      }
    }
  }
};
