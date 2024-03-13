import { defineTailwindConfig } from "@fellipeutaka/styles";

export default defineTailwindConfig({
  content: ["./src/{app,screens,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
});
