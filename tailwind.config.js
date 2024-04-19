const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linkedin: "#0077B5",
        "linkedin-dark": "#005f91",
        twitter: "#1DA1F2",
        "twitter-dark": "#166b99",
        instagram: "#E4405F",
        "instagram-dark": "#c62d42",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  plugins: [],
});
