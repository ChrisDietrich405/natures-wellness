const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  preset: "@shelf/jest-mongodb",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageProvider: "v8",
  watchPathIgnorePatterns: ["globalConfig"],
};

module.exports = createJestConfig(config);
