# @fedikit/rehype-custom-emoji

Rehype plugin to support custom emoji (emojo)

## Use

```ts
import { rehype } from 'rehype'
import { rehypeCustomEmoji, all, category, one, oneMisskey } from '@fedikit/rehype-custom-emoji'

const file = await rehype()
  .use(rehypeCustomEmoji, {
    emojis: [
      // user defined
      {
        shortcode: 'custom_emoji',
        url: 'https://example.com/custom_emoji.png',
      },
      // get all emoji from mastodon instance
      ...(await all('https://mastodon.social')),
      // get category-specific emoji from mastodon instance
      ...(await category('https://mozilla.social', 'Mozilla')),
      // get a specific emoji from mastodon instance
      ...(await one('https://m.webtoo.ls', 'vitest')),
      // get a specific emoji from misskey instance
      ...(await oneMisskey('https://misskey.io', 'ai_acid_misskeyio'))
    ],
  })
  .process(':custom_emoji:')

// <picture>
//   <source media="(prefers-reduced-motion: no-preference)" srcset="https://example.com/custom_emoji.png">
//   <img alt=":custom_emoji:" src="https://example.com/custom_emoji.png" style="aspect-ratio:1/1;height:1em;vertical-align:text-top" title=":custom_emoji:">
// </picture>
console.log(String(file))
```

## Compatibility

This plugin accept arrays, so you can get [CustomEmoji](https://docs.joinmastodon.org/entities/CustomEmoji/) entity from any source.

The main compatibility of fetcher is described here, it is compatible with Mastodon, Pleroma and their forks.

Misskey: since it doesn't implement `/api/v1/custom_emojis`, it can only get single emojis.

GoToSocial: not currently supported, depending on [#2340](https://github.com/superseriousbusiness/gotosocial/issues/2430)
