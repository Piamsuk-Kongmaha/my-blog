import { ui, defaultLang } from './ui';

// Remove the site base (e.g. /my-blog) so paths look like they're at the root
function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) return pathname.slice(base.length) || '/';
  return pathname;
}

export function getLangFromUrl(url: URL) {
  const [, lang] = stripBase(url.pathname).split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = stripBase(new URL(url).pathname);
  const parts = pathname?.split('/');
  
  if (parts.length > 1 && parts[1] in ui) {
    return parts.slice(2).join('/') || undefined;
  }
  
  return pathname.slice(1) || undefined;
}
