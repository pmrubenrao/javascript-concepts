### Dependency Injection (DI) allows you to pass dependencies explicitly. Rather than relying on global variables. This improves testability, modularity, and flexibility of your code.

Here's how you can implementit to replace the use of the global isFeatureEnabled variable.

Why This Is Better

1. Modularity: Dependencies are clear and passed explicitly.
2. Testability: You can easily test logFeatureStatus or FeatureLogger with different inputs without modifying global state.
3. Scalability: Adding new features or configurations is easier because dependencies are well-structured.

## Awilix dependency injection.

## Why This Works

1. Plain JavaScript: Uses standard JavaScript syntax without relying on TypeScript features.
2. Dynamic Dependency Injection: The container automatically injects the required dependencies.
3. Testability: Mock dependencies can easily be registered in the container for testing.

<!-- // test.js
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
mockLogger.logStatus(); // Output: Feature is disabled! -->
