module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
  extends: 'universe/native',
};
