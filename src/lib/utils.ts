export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function isExternalUrl(url?: string) {
  return Boolean(url && /^https?:\/\//i.test(url));
}
