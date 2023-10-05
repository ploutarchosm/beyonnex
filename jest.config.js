const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const esModules = ['.*\\.mjs$'].join('|'); // add any esModules here

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage/app',
  coveragePathIgnorePatterns: ['<rootDir>/src/main.ts', '.module.ts'],
  moduleNameMapper: Object.assign(
    pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: '<rootDir>/src',
    }),
    {
      // you can add third party sources (example d3.js)
    }
  ),
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  maxWorkers: '50%',
  cacheDirectory: '<rootDir>/.cache',
};
