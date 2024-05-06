# ionic-solidjs

SolidJS integration for the Ionic component framework, including ionic-router.

# Usage

You may refer to the Ionic Framework components documentation.

https://ionicframework.com/docs/components

for most of the components. The component and property names are the same as the ones found in Ionic's React implementation.

There is a router included in `@ionic-solidjs/core` that is a thin wrapper of the [ionic webcomponent router](https://ionicframework.com/docs/api/router), but with a `PascalCased` / `camelCased` naming convention for the related components and component props respectively, as well as support for passing Solid components as arguments.

`ionicons` are available by importing from `@ionic-solidjs/ionicons`. Use these instead of string constants to ensure proper initialization.

# Install

```
npm install @ionic-solidjs/core solidjs
```

# Example

See the example directory
