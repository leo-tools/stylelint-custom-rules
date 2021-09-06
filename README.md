# stylelint-custom-rules

some custom stylelint rules

## Installation

```bash
yarn add @leo-tools/stylelint-custom-rules -D
```

## no-local-assets

```json
{
  "plugins": [
    "leo-tools/stylelint-custom-rules"
  ],
  "rules": {
    "lego/no-local-assets": ["asset"]
    // OR
    // "lego/no-local-assets": true, // By default is 'asset' 
    // OR
    // "lego/no-local-assets": [/static\/assets/],
  }
}
```
