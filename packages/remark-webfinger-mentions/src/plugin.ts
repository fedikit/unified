import type { Root } from 'mdast'
import type { Plugin, Transformer } from 'unified'

import { findAndReplace } from 'mdast-util-find-and-replace'
import { u } from 'unist-builder'

import { getAcct } from './fetcher'

export type RemarkWebfingerMentionsOptions = {
  match?: RegExp
  trim?: (str: string) => string
}

export const remarkWebfingerMentions: Plugin<[RemarkWebfingerMentionsOptions], Root, Root> = (options): Transformer<Root, Root> => {
  const resources = new Map<string, string | undefined>()
  const match = options.match ?? /@([\w%+.-]+)@([\w.-]+\.[\da-z-]{2,})/g
  const trim = options.trim ?? ((str: string) => str.slice(1)) // @user@example.com => user@example.com

  return (tree) => findAndReplace(tree, [
    match,
    (str: string) => {
      const acct = trim(str)
      let url: string | undefined

      if (resources.has(acct)) {
        url = resources.get(acct)
      }
      else {
        url = getAcct(acct)
        resources.set(acct, url)
      }

      return url
        ? u('link', { url }, [u('text', str)])
        : false
    },
  ])
}
