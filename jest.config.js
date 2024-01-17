const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  preset: "@shelf/jest-mongodb",
  coverageProvider: "v8",
  testEnvironment: "node",
  watchPathIgnorePatterns: ['globalConfig'],
  moduleNameMapper: {
    '^.+\\/db$': '<rootDir>/__mocks__/mockMongoDB.js'
  }
};


module.exports = createJestConfig(config);
