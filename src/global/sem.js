export const getQuerys = (query, keys) => {
  const ret = {}
  for (const key in query) {
    const lower = key.toLocaleLowerCase()
    if (~keys.indexOf(lower)) ret[lower] = query[key].trim()
  }
  return ret
}