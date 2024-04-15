export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.svg$": "jest-svg-transformer",
    '^@di/(.*)$': '<rootDir>/src/di/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '^@application/(.*)$': '<rootDir>/src/application/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  moduleDirectories:[
    "node_modules",
    "<rootDir>/src"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/presentation/assets/**/*', //Exclude
    '!<rootDir>/src/di/**/*', //Exclude
    '!<rootDir>/src/presentation/**/*config.ts', //Exclude
    '!<rootDir>/src/presentation/stories/**/*' //Exclude
  ],
  modulePaths: ['<rootDir>'],
  transform: {
    "^.+\\.(tsx|ts)?$": "ts-jest",
  },
};