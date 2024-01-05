import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { describe, expect, it } from 'vitest'

import { category, one, rehypeCustomEmoji } from '../src'

describe('mastodon', () => {
  it('mozilla.social', async () => {
    const mastodon = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeCustomEmoji, {
        emojis: await category(new URL('https://mozilla.social'), 'Mozilla'),
      })
      .use(rehypeStringify)
      .process('Hello, :firefox:!')

    expect(mastodon.value).toBe('<p>Hello, <picture><source media="(prefers-reduced-motion: no-preference)" srcset="https://assets.mozilla.social/custom_emojis/images/000/017/290/original/f1431a56d0ce4ad2.png"><img alt=":firefox:" src="https://assets.mozilla.social/custom_emojis/images/000/017/290/static/f1431a56d0ce4ad2.png" style="aspect-ratio:1/1;height:1em;vertical-align:text-top" title=":firefox:"></picture>!</p>')
  })

  it('m.webtoo.ls', async () => {
    const mastodon = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeCustomEmoji, {
        emojis: [await one('https://m.webtoo.ls', 'vitest')],
      })
      .use(rehypeStringify)
      .process('Hello, :vitest:!')

    expect(mastodon.value).toBe('<p>Hello, <picture><source media="(prefers-reduced-motion: no-preference)" srcset="https://media.webtoo.ls/custom_emojis/images/000/000/380/original/bd890892e07d0f17.png"><img alt=":vitest:" src="https://media.webtoo.ls/custom_emojis/images/000/000/380/static/bd890892e07d0f17.png" style="aspect-ratio:1/1;height:1em;vertical-align:text-top" title=":vitest:"></picture>!</p>')
  })
})
