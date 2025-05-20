/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        heading: ['var(--font-orbitron)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      // 3D Transform utilities for parallax effects
      transformStyle: {
        'flat': 'flat',
        '3d': 'preserve-3d'
      },
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      translate: {
        'z-0': '0px',
        'z-10': '10px',
        'z-15': '15px',
        'z-20': '20px',
        'z-25': '25px',
        'z-30': '30px',
        'z-40': '40px',
        'z-50': '50px',
        'z-[-10]': '-10px',
        'z-[-20]': '-20px',
        'z-[-30]': '-30px',
        'z-[-40]': '-40px',
        'z-[-50]': '-50px',
      },
      rotate: {
        'x-5': 'rotateX(5deg)',
        'x-10': 'rotateX(10deg)',
        'x-15': 'rotateX(15deg)',
        'x-[-5]': 'rotateX(-5deg)',
        'x-[-10]': 'rotateX(-10deg)',
        'x-[-15]': 'rotateX(-15deg)',
        'y-5': 'rotateY(5deg)',
        'y-10': 'rotateY(10deg)',
        'y-15': 'rotateY(15deg)',
        'y-[-5]': 'rotateY(-5deg)',
        'y-[-10]': 'rotateY(-10deg)',
        'y-[-15]': 'rotateY(-15deg)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse-slow": {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 },
        },
        "float-slow": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "shimmer": {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "shimmer": "shimmer 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
