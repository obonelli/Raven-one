// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // ✅ en v3 va como string
    content: [
        "./src/app/**/*.{ts,tsx,mdx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/styles/**/*.{css,ts,tsx}",
    ],
    theme: {
        extend: {
            container: { center: true, padding: "1rem" },
            colors: {
                brand: {
                    50: "#f5f7ff",
                    100: "#eceefe",
                    200: "#d9dbfd",
                    300: "#b8bafc",
                    400: "#8f8ef8",
                    500: "#6a63f1",
                    600: "#544bdc",
                    700: "#463eb6",
                    800: "#393491",
                    900: "#2f2a74",
                },
                accent: { 400: "#65e3ff", 500: "#2fd7ff", 600: "#12bde6" },
            },
            boxShadow: { glow: "0 0 20px rgba(47,215,255,.35)" },
        },
    },
    plugins: [],
};

export default config;
