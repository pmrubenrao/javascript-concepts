# Tree Shaking in Detail

Tree shaking is a term used in JavaScript development to describe the process of removing unused or "dead" code from the final bundle. It primarily applies to ES Modules (ESM) because of their static structure, which allows tools like Webpack, Rollup, or ESBuild to analyze and eliminate unused code during the build process.

## How Tree Shaking Works

#### Static Analysis:

ES Modules use a static syntax (import/export), allowing bundlers to analyze the entire module graph at build time without executing the code.
This analysis determines which parts of a module are actually used (referred to as live code) and which are not (dead code).
Code Elimination:

Any unused exports are removed from the final bundle during the bundling process, reducing the size of the delivered JavaScript.
Why Tree Shaking is Effective with ES Modules
Static Imports and Exports
ES Modules are inherently static, meaning:

Imports and exports are determined at compile time, not runtime.
This ensures that a bundler knows exactly what is being imported and what is unused.
Example:

```javascript
Copy code
// utilities.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add } from './utilities.js';

console.log(add(2, 3)); // Only the `add` function is included in the bundle.
```

The `subtract` function will be excluded from the final bundle because it is never imported.

#### Comparison with CommonJS

In CommonJS, the entire module is imported as an object, making it harder for bundlers to know what is unused:

```javascript
Copy code
// utilities.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// main.js
const utilities = require('./utilities');
console.log(utilities.add(2, 3)); // Both `add` and `subtract` are included.
```

Tree shaking doesn’t work effectively here because CommonJS lacks the static structure required for proper analysis.

### Requirements for Tree Shaking

#### ES Modules (ESM):

1. Your project should use ES Modules syntax (import/export).
   Bundler with Tree Shaking Support:

2. Modern bundlers like Webpack, Rollup, or ESBuild support tree shaking.
   Example: Webpack enables tree shaking automatically in production mode.

#### Avoid Side Effects:

Modules with side effects (code that runs when the module is imported) can prevent tree shaking. These are often global modifications or setup code.

Tree Shaking Example in Action

```js
Scenario: Utility Library
utilities.js:

// utilities.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// A function that runs when imported
export const init = () => {
    console.log('Initialized');
};

// main.js
import { add } from './utilities.js';
console.log(add(2, 3));
```

### Tree Shaking Process:

The bundler will include only the add function in the final bundle.
The subtract and init functions are excluded because they are not used.

### Handling Side Effects

#### What Are Side Effects?

A side effect occurs when a module performs some operation as soon as it is imported, e.g., modifying global variables, adding event listeners, or initializing states.

Example:

```javascript
Copy code
// sideEffect.js
console.log('Side effect runs on import!'); // This runs even if no exports are used.
```

#### Bundler Configuration for Side Effects

To allow tree shaking to work correctly, bundlers need to know which files/modules are side-effect-free. This is typically defined in the package.json file:

```json

{
  "sideEffects": false
}
//false: All files are considered free of side effects.
//Array: Specify files with side effects:
{
  "sideEffects": ["./globalConfig.js"]
}
```

#### Practical Benefits of Tree Shaking

1. Smaller Bundle Sizes:

2. Unused code is removed, leading to faster loading times for web applications.
   Better Performance:

3. The browser has less JavaScript to parse and execute.
   Improved Maintainability:

4. Encourages developers to write modular, clean code, avoiding unnecessary imports.

### Limitations of Tree Shaking

#### Dynamic Imports:

Code like this makes tree shaking impossible because the bundler cannot determine what will be imported at runtime:

```javascript
const module = await import('./utilities.js');
```

#### Complex Dependencies:

If a dependency (e.g., a third-party library) is not designed with ES Modules or includes side effects, it can prevent tree shaking.

#### Dead Code with Side Effects:

If a function has side effects, it may not be removed even if it is unused:

```javascript
export const init = () => console.log('Initialized');
```

### Real-World Example: React + Webpack

React applications often include utility libraries (e.g., Lodash). Without tree shaking, unused Lodash functions can bloat the bundle.

Problem Without Tree Shaking:

```javascript
// lodashExample.js
import _ from 'lodash';

console.log(_.cloneDeep({}));
// This imports the entire Lodash library, even though only cloneDeep is used.
```

#### Solution with Tree Shaking:

Use modular imports:

```javascript
// lodashExample.js
import cloneDeep from 'lodash/cloneDeep';

console.log(cloneDeep({}));
//This ensures only the cloneDeep function is included in the final bundle.
```

### How to Test Tree Shaking

Build the Project:

Run your bundler in production mode (e.g., webpack --mode production).
Inspect the Bundle:

Use tools like Webpack’s Bundle Analyzer to see what’s included in the final bundle:

```bash

npm install webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/bundle.js
```

#### Check for Unused Code:

If unused functions or variables appear in the bundle, review your imports and package.json settings.

## Key Points for Interviews

1. Definition:Tree shaking is the process of removing unused code from the final bundle.
2. Requirements:
   ES Modules, a tree-shaking-capable bundler, and side-effect-free code.
3. Benefits:
   Reduces bundle size, improves performance, and ensures clean code.
4. Limitations:
   Dynamic imports, side effects, and non-ESM libraries can hinder tree shaking.
5. Practical Example:
   Show how unused functions in a utility module are eliminated when only specific imports are used.
   Would you like to try tree shaking with a specific tool like Webpack or Rollup?

## Question:

But you can include the specific function from a module in commonJs as well like below

```javascript

// utilities.js
// file: math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// main.js
const {add} = require('./utilities');
console.log(.add(2, 3)); // Both add and subtract are included.
```

and believe this wil only load the add function from utilities.js in the final bundle

## Answer:

Your example highlights a `common misconception` about how CommonJS modules work when selectively importing properties. Let's clarify this in detail.

### How CommonJS Handles Exports

When you use CommonJS, the require() function imports the entire module object, not just the specific function you destructure from it. This means that all exports are evaluated and included, even if you only use one part of the module.

Your Example:

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// main.js
const { add } = require('./math');
console.log(add(2, 3));
```

#### What Actually Happens:

At Runtime: When require('./math') is called, Node.js executes the entire math.js file and loads everything into memory.
Destructuring: The { add } destructuring happens after the entire module object is imported.

#### Why This Prevents Tree Shaking

In CommonJS:

**Dynamic Nature of require**: The require() function is a runtime feature, so bundlers cannot statically analyze which parts of a module are actually used.

**No Static Analysis**: The bundler treats the entire module as one unit and cannot remove unused exports, even if they are not destructured or used.

**Result:**
Even though you destructure add, both add and subtract are included in the final bundle because the whole module is loaded.

#### ES Modules Handle This Differently

ES Modules enable tree shaking because their imports and exports are static. This means that the module structure can be fully analyzed at build time. Tools like Webpack or Rollup can identify which parts of a module are imported and eliminate unused parts.

Equivalent ES Module Example:

```javascript
// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
```

#### What Happens in ESM:

The bundler sees that only add is imported.
It excludes subtract from the final bundle.

#### CommonJS Output:

If you bundle the CommonJS version of your example using a tool like Webpack in production mode, the entire math.js file will be included in the final bundle.

#### ESM Output:

If you bundle the ES Module version, only the add function will appear in the final output, thanks to tree shaking.

#### Why This Matters

In small projects, the difference may seem minor.
In larger projects or with third-party libraries (like lodash), the inability to tree-shake unused functions can significantly increase the bundle size.

## Conclusion

CommonJS imports the entire module and uses runtime destructuring, which prevents tree shaking.
ES Modules allow tree shaking by enabling static analysis of imports and exports.
