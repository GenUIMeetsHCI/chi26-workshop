// Configuration for base URL paths
// In development: empty string (localhost:3000/)
// In production: /chi26-workshop/ (for GitHub Pages)
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/chi26-workshop" : "";

// Helper function to get asset path
export const getAssetPath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_PATH}/${cleanPath}`;
};
