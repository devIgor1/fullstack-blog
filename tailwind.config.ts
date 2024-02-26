import { withUt } from "uploadthing/tw"

export default withUt({
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1300px",
        },
      },
      fontFamily: {
        pally: "Pally",
      },
      backgroundImage: {
        primary: "url(/primary.svg)",
        hero: "url(/hero.svg)",
        footer: "url(/footer.svg)",
      },
      borderColor: {
        DEFAULT: "black",
      },
    },
  },
  plugins: [],
})
