const testRule = require('stylelint-test-rule-tape')

const rules = require('../../rules')
const rule = rules['@leo-tools/no-local-assets']

testRule(rule, {
  ruleName: rule.ruleName,
  config: true,
  accept: [
    {
      code: 'background: url("https://b.com/assets/a.png");'
    }
  ],

  reject: [
    {
      code: 'background: url("../../assets/a.png");',
      message: rule.messages.rejected()
    }
  ]
})

testRule(rule, {
  ruleName: rule.ruleName,
  config: ['static'],
  accept: [
    {
      code: 'background: url("https://b.com/assets/a.png");'
    }
  ],

  reject: [
    {
      code: 'background: url("../../static/a.png");',
      message: rule.messages.rejected()
    }
  ]
})

testRule(rule, {
  ruleName: rule.ruleName,
  config: [/statics/],
  accept: [
    {
      code: 'background: url("https://b.com/assets/a.png");'
    }
  ],

  reject: [
    {
      code: 'background: url("../../statics/a.png");',
      message: rule.messages.rejected()
    }
  ]
})
