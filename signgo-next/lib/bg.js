// Returns an inline style that layers the photo over a subtle darkening tint.
// The CSS class already defines a brand gradient as the base background, so if
// the photo URL fails to load the gradient remains visible (no broken images).
export function bg(url) {
  return {
    backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.08),rgba(0,0,0,.08)), url('${url}')`,
  };
}
