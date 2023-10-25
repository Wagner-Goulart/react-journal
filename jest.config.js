/* eslint-disable no-undef */
<<<<<<< HEAD
// module.exports = {
//     testEnvironment: 'jest-environment-jsdom',
//     setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
//     moduleNameMapper: {
//       '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mock/fileMock.js',
//       '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     },
//   }
=======
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mock/fileMock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  }
>>>>>>> 9192b054464e67e23332cf5e739784bf2247e63c
