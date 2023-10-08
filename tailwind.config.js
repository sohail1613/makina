module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      codec: ["Codec Pro Regular"],
      codecMedium: ["Codec Pro Medium"],
    },
    extend: {
      screens: {
        xs: { min: "0px", max: "576px" },
        sm: { min: "576px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1339px" },
        xl: { min: "1200px" },
        tx: { min: "640px" },
        tx2: { min: "768px" },
      },

      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 45px 45px rgba(0, 0, 0, 0.25)",
          "0 45px 45px rgba(0, 0, 0, 0.25)",
        ],
      },

      colors: {
        main: "#6941C6",
        borderPrimary: "#D0D5DD",

        primary: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
          900: "#42307D",
        },

        secondary: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },

        teal: {
          25: "#F6FEFC",
          50: "#F0FDF9",
          100: "#CCFBEF",
          200: "#99F6E0",
          300: "#5FE9D0",
          400: "#2ED3B7",
          500: "#15B79E",
          600: "#0E9384",
          700: "#107569",
          800: "#125D56",
          900: "#134E48",
        },

        validate: {
          success: "#12B76A",
          error: "#F04438",
          warning: "#FAC515",
          errorBorder: "#FDA29B",
        },

        status: {
          green100: "#ECFDF3",
          green200: "#039855",
          red100: "#FEE4E2",
          red200: "#B42318",
          yellow100: "#FEFBE8",
          yellow200: "#EAAA08",
          blue100: "#D1E9FF",
          blue200: "#175CD3",
          purple100: "#F4EBFF",
          purple200: "#6941C6",
          gray100: "#EAECF0",
          gray200: "#344054",
          white100: "#FCFCFD",
          white200: "#EAECF0",
        },

        grayDark: "#595959",

        red100: "#FEE4E2",
        red50: "#FEF3F2",
        red600: "#D92D20",
        blue50: "#F0F9FF",
        blue700: "#026AA2",
        success700: "#027A48",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
