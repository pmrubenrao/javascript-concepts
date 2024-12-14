//Step 2: Define Dependencies
// Create a configuration object and a service class that depends on it.
// config.js
const config = {
  isFeatureEnabled: true, // This could come from an environment variable or file
};

module.exports = config;

// featureLogger.js
class FeatureLogger {
  constructor({ config }) {
    this.config = config;
  }

  logStatus() {
    if (this.config.isFeatureEnabled) {
      console.log('Feature is enabled!');
    } else {
      console.log('Feature is disabled!');
    }
  }
}

module.exports = FeatureLogger;

//   Step 3: Set Up the DI Container
//   Use Awilix to register and resolve dependencies.
// container.js
const { createContainer, asValue, asClass } = require('awilix');
const config = require('./config');
const FeatureLogger = require('./featureLogger');

const container = createContainer();

// Register the configuration object
container.register({
  config: asValue(config),
});

// Register the service class
container.register({
  featureLogger: asClass(FeatureLogger).singleton(),
});

module.exports = container;

// Step 4: Use the Injected Dependencies
// Resolve the FeatureLogger from the container and call its method.
// app.js
const container = require('./container');

const logger = container.resolve('featureLogger');
logger.logStatus(); // Output: Feature is enabled!

// Example Test with Mock
// test.js
const { createContainer, asValue, asClass } = require('awilix');
const FeatureLogger = require('./featureLogger');

// Mock configuration
const mockConfig = { isFeatureEnabled: false };

const testContainer = createContainer();
testContainer.register({
  config: asValue(mockConfig),
  featureLogger: asClass(FeatureLogger).singleton(),
});

const mockLogger = testContainer.resolve('featureLogger');
mockLogger.logStatus(); // Output: Feature is disabled!
