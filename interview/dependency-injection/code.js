//Refactoring Using Dependency Injection
//Define the dependency explicitly
//Instead of relying on global.isFeatureEnabled, pass the value where it's needed.
function logFeatureStatus(isFeatureEnabled) {
  if (isFeatureEnabled) {
    console.log('Feature is enabled!');
  } else {
    console.log('Feature is disabled!');
  }
}

// Use a configuration object
// If there are multiple settings, you can group them into an object:
// Inject the dependency
const isFeatureEnabled = true;
logFeatureStatus(isFeatureEnabled);

function logFeatureStatus(config) {
  if (config.isFeatureEnabled) {
    console.log('Feature is enabled!');
  } else {
    console.log('Feature is disabled!');
  }
}

// Use a class with dependency injection
// If the feature check is part of a larger system,
// use a class to encapsulate the behavior:
// Inject the configuration object
const config = { isFeatureEnabled: true };
logFeatureStatus(config);

class FeatureLogger {
  constructor(isFeatureEnabled) {
    this.isFeatureEnabled = isFeatureEnabled;
  }

  logStatus() {
    if (this.isFeatureEnabled) {
      console.log('Feature is enabled!');
    } else {
      console.log('Feature is disabled!');
    }
  }
}

// Inject the dependency when creating the instance
const logger = new FeatureLogger(true);
logger.logStatus();
