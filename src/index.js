const { createPlugin } = require('stylelint')

const rules = require('./rules')

module.exports = [
  createPlugin('leo-tools/stylelint-custom-rules', rules['no-local-assets']),
]
