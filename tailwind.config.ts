import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        "1": "1px",
      },
      fontSize: {
        xxs: "12px",
      },
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        dark: "var(--dark)",
        darker: "var(--darker)",
        light: "var(--light,--tw-opacity)",
        lighter: "var(--lighter)",
        ["dark-button"]: "var(--dark-button)",
      },
      borderRadius: {
        default: "var(--default-border-radius)",
      },
    },
  },
  plugins: [],
};
export default config;
