module.exports = {
  transform: {
    "\\.(js|jsx)$": "babel-jest",
    "\\.(css)$": "<rootDir>/config/cssTransform.js",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
