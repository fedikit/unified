import { describe, expect, it } from 'vitest'

import * as exports from '../src'

describe('exports', () => {
  it('default', () => {
    expect(exports.default).not.toBeUndefined()
  })
  it('remarkWebfingerMentions', () => {
    expect(exports.remarkWebfingerMentions).not.toBeUndefined()
  })
  it('getAcct', () => {
    expect(exports.getAcct).not.toBeUndefined()
  })
})
