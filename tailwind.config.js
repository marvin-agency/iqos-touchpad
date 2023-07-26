/** @type {import('tailwindcss').Config} */
const { sizes, letterSpacing } = require("./tailwind.utils");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "IQOSRegular", //default font -- change value of sans key to determine default
    },
    backgroundImage: {
      "age-page": "url('/src/assets/images/age-picker-background.png')",
    },
    fontSize: {
      h1: ["80px", { lineHeight: "110px" }],
      h2: ["48px", { lineHeight: "72px" }],
      "h2.5": ["30px", { lineHeight: "35.57px" }],
      h3: ["30px", { lineHeight: "49px" }],
      h4: ["20px", { lineHeight: "30px" }],
      "body-extra-large": ["48px", { lineHeight: "73.54px" }],
      "body-large": ["40px", { lineHeight: "72px" }],
      "body-medium": ["37.4px", { lineHeight: "57.3px" }],
      "body-small": ["25.4px", { lineHeight: "38.91px" }],
      button: ["26px", { lineHeight: "39.83px" }],
      link: ["25px", { lineHeight: "38.3px" }],
    },
    screens: {
      "2xs": "0px",
      // => @media (min-width: 0px) { ... }
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    spacing: sizes,
    outlineWidth: sizes,
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
        9: "9 9 0%",
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        inherit: "inherit",
        backdrop: "rgba(0, 0, 0, 0.54)",
        transparent: {
          DEFAULT: "transparent",
        },
        primary: {
          DEFAULT: "var(--primary)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        white: {
          DEFAULT: `var(--white)`,
        },
        gray: {
          DEFAULT: `var(--gray)`,
        },
        blue: {
          DEFAULT: `var(--blue)`,
          500: `var(--blue-500)`,
        },
        turqoise: {
          DEFAULT: `var(--turqoise)`,
        },
        "turqoise-green": {
          DEFAULT: `var(--turqoise-green)`,
        },
        "dark-blue": {
          DEFAULT: `var(--dark-blue)`,
        },
        "darker-blue": {
          DEFAULT: `var(--darker-blue)`,
        },
        "darkest-blue": {
          DEFAULT: `var(--darkest-blue)`,
        },
        "blue-fade": {
          DEFAULT: `var(--blue-fade)`,
        },
        "blue-gradient": {
          from: `var(--blue-gradient-from)`,
          to: `var(--blue-gradient-to)`,
        },
      },
      letterSpacing: letterSpacing,
      minHeight: sizes,
      maxHeight: sizes,
      minWidth: sizes,
      maxWidth: sizes,
      boxShadow: {
        card: "0px 0px 8px 4px rgba(0,0,0,0.08)",
        menu: "0 2px 8px rgb(0 0 0 / 15%)",
        "arrow-top": "-4px -4px 8px 0px rgb(0 0 0 / 6%)",
        "arrow-bottom": "4px 4px 8px 0px rgb(0 0 0 / 6%)",
        "arrow-right": "4px -4px 8px 0px rgb(0 0 0 / 6%)",
        "arrow-left": "-4px 4px 8px 0px rgb(0 0 0 / 6%)",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        0.5: "0.5px",
        1: "1px",
        1.5: "1.5px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
