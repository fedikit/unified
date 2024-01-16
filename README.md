# fedikit/unified

Collection of unified plugins by FediKit project.

## [`@fedikit/rehype-custom-emoji`](/packages/rehype-custom-emoji/)

Rehype plugin to support custom emoji (emojo)

```ts
import { rehype } from 'rehype'
import { rehypeCustomEmoji, all } from '@fedikit/rehype-custom-emoji'

await rehype()
  .use(rehypeCustomEmoji, {
    emojis: await all('https://mastodon.social')
  })
```

## [`@fedikit/remark-webfinger-mentions`](/packages/remark-webfinger-mentions/)

Remark plugin to replace acct mentions with links

```ts
import { remark } from 'remark'
import { remarkWebfingerMentions } from '@fedikit/remark-webfinger-mentions'

await remark()
  .use(remarkWebfingerMentions)
```
