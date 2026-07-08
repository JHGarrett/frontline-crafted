const productImageModules = import.meta.glob('../assets/products/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export const galleryImages = Object.entries(productImageModules)
  .filter(([path]) => /[-–]1\.(jpg|jpeg|png|webp)$/i.test(path))
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, image]) => image);
