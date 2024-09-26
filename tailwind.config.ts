import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      oldNeracoosBlue: { DEFAULT: "#114a6e" },
      neracoosBlue: { DEFAULT: "#083d52" },
      metallicSeaweed: { DEFAULT: "#178596" },
      coastalMeadow: { DEFAULT: "#2ab78f" },
      buoyYellow: { DEFAULT: "#ffcd22" },
      whatOrange: { DEFAULT: "#ffae6d" },
      primary: { DEFAULT: "#083d52" },
      secondary: { DEFAULT: "#178596" },
      success: { DEFAULT: "#2ab78f" },
      warning: { DEFAULT: "#ffcd22" },
      danger: { DEFAULT: "#ffae6d" },
      info: { DEFAULT: "#178596" },
    },
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
