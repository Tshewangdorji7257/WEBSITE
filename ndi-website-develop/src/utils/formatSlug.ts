const formatSlug = (title: string, id: string): string => {
  const rowTitle = title
    .trim()
    .toLocaleLowerCase()
    .split(' ')
    .join('-')
    .replace(/[^a-zA-Z0-9]+/g, '-')
  return encodeURIComponent(`${rowTitle}_${id}`)
}

const getId = (slug: string): string => slug.split('_')[1]

export { formatSlug, getId }
