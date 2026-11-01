// Builds a correct URL for files in /public, including the GitHub Pages base path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
