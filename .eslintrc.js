module.exports = {
  root: true,
  extends: ["universe/native"],
  plugins: ["react-hooks"],
  rules: {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
};
