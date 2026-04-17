/**
 * URL for files under `src/assets/`. They are copied to `/assets/` at build time
 * (see `angular.json` → assets). Path segments are encoded for spaces/special chars.
 */
export function asset(relativePath: string): string {
  const trimmed = relativePath.replace(/^\/+/, '');
  const segments = trimmed.split('/').map((s) => encodeURIComponent(s));
  return `/assets/${segments.join('/')}`;
}
