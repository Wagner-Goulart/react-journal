/* eslint-disable no-undef */
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js',
    ],
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mock/fileMock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  };