export const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const asset = (path: string) =>
  `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
