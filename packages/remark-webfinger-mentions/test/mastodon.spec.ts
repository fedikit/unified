import { remark } from 'remark'
import { describe, expect, it } from 'vitest'

import { remarkWebfingerMentions } from '../src'

describe('mastodon', () => {
  it('mozilla.social', async () => {
    const mastodon = await remark()
      .use(remarkWebfingerMentions, {})
      .process('Hello, @mozilla@mozilla.social!')

    expect(mastodon.value).toBe('Hello, [@mozilla@mozilla.social](https://mozilla.social/@mozilla)!\n')
  })

  it('m.webtoo.ls', async () => {
    const mastodon = await remark()
      .use(remarkWebfingerMentions, {})
      .process('Hello, @vitest@m.webtoo.ls!')

    expect(mastodon.value).toBe('Hello, [@vitest@m.webtoo.ls](https://m.webtoo.ls/@vitest)!\n')
  })
})
