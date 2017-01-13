# eslint-config-globetro
My opinionated eslint config

## Usage
The config covers rules for ES2015 and React.

- `npm i --save eslint-config-globetro`
- create a `.eslintrc` on the root of your project with the following content:

### For node app
```json
{
  "extends": "eslint-config-globetro",
  "rules": {}
}
```

### For React
```json
{
  "extends": "eslint-config-globetro/react",
  "rules": {}
}
```

Any `rules` after the extended rules in your `.eslintrc` will override the rules in ureact.

## Contributing
IMPORTANT: Do not manually change the version in `package.json`

1. Make sure all changes are merged into `master`
2. Run the release script:

`npm run release -- major|minor|patch`

Example:

`npm run release -- patch`

This will auto-bump package.json, tag the release, and publish