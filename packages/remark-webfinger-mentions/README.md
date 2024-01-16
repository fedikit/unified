# @fedikit/remark-webfinger-mentions

Remark plugin to replace acct mentions with links

## Use

```ts
import { remark } from 'remark'
import { remarkWebfingerMentions } from '@fedikit/rehype-custom-emoji'

const file = await remark()
  .use(remarkWebfingerMentions)
  .process('Hello, @mozilla@mozilla.social!')

// Hello, [@mozilla@mozilla.social](https://mozilla.social/@mozilla)!\n
console.log(String(file))
```
