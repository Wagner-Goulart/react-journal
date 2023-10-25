/* eslint-disable no-undef */
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mock/fileMock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  }