import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
  collectCoverage: true,
  collectCoverageFrom: [
      "src/**/*.(js,jsx)",
      "src/**/*.(ts,tsx)",
      "!vendor/**/*.(js,jsx)",
      "!**/node_modules/**"
  ],
  coverageProvider: "babel",
  coverageThreshold: {
      global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100
      }
  },
}

export default config