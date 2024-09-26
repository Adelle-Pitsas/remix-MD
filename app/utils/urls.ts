/**
 * Replace parts of of a react-router URL
 *
 * @param url Source URL with keys to be replaces in the form of /path/:key/to
 * @param key Key to be replaced with leading identifier `:key`
 * @param value Value to replace `:key` with.
 * @returns Url with reformatted string.
 */
export function urlPartReplacer(url: string, key: string, value: string): string {
    return url
      .split("/")
      .map((part) => (part === key ? value : part))
      .join("/")
  }