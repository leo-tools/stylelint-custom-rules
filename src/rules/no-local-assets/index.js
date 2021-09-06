const report = require('stylelint/lib/utils/report')
const ruleMessages = require('stylelint/lib/utils/ruleMessages')
const validateOptions = require('stylelint/lib/utils/validateOptions')
const {isRegExp, isString, isBoolean} = require('../utils')

const ruleName = 'leo-tools/no-local-assets'

const messages = ruleMessages(ruleName, {
  rejected: () => `Unexpected local assets defined, Please use cdn`
})

function rule(option) {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, { actual: option, possible: [isRegExp, isString, isBoolean], })
    if (!validOptions) {
      return
    }

    if (!option) {
      return
    }

    let pattern

    if (isBoolean(option)) {
      pattern = new RegExp('assets')
    } else {
      pattern = isString(option) ? new RegExp(option) : option
    }

    root.walkDecls((decl) => {
      if (!pattern.test(decl.value.toLowerCase())) {
        return
      }

      if (!decl.value.toLowerCase().includes('http')) {
        report({
          message: messages.rejected(decl),
          node: decl,
          result,
          ruleName,
        })
      }
    })
  }
}

rule.ruleName = ruleName
rule.messages = messages
module.exports = rule
