module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      keyframes: {
        sqew: {
          from: {
            transform: "skew(20deg)",
            color: "#0e0e0e",
          },
          to: { transform: "skew(0deg)", color: "#e8e8e8" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
