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
    "@leo-tools/stylelint-custom-rules"
  ],
  "rules": {
    "@leo-tools/no-local-assets": true // By default is 'asset' 
    // OR
    // "@leo-tools/no-local-assets": ['static'],
    // OR
    // "lego/no-local-assets": [/static\/assets/],
  }
}
```
