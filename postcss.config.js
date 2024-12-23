// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2F667F",
//         secondary: "#539BBB",
//         turnary: "#EEF5F8",
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         shimmer: "shimmer 2s linear infinite",
//       },
//     },
//     keyframes: {
//       shimmer: {
//         from: {
//           backgroundPosition: "0 0",
//         },
//         to: {
//           backgroundPosition: "-200% 0",
//         },
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
// };

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};