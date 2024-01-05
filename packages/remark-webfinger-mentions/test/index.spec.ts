import { describe, expect, it } from 'vitest'

import * as exports from '../src'

describe('exports', () => {
  it('default', () => {
    expect(exports.default).toBe(exports.remarkWebfingerMentions)
  })
  it('remarkWebfingerMentions', () => {
    expect(exports.remarkWebfingerMentions).toBe(exports.default)
  })
  it('getAcct', () => {
    expect(exports.getAcct).not.toBeUndefined()
  })
})
