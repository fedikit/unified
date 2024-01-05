import { createFullConfig } from '@importantimport/eslint-config'

export default await createFullConfig({ ts: true }, {
  rules: {
    'n/no-extraneous-import': 'off',
    'n/no-process-exit': 'off',
    'n/no-unpublished-import': 'off',
  },
})
