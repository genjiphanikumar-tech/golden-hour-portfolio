/**
 * Asset helper for handling both Lovable and production environments
 */
export const getAssetUrl = (asset: any): string => {
  if (!asset) return '';
  
  // If it's an asset.json from Lovable with a url property
  if (asset.url) {
    return asset.url;
  }
  
  // If it's a direct path string
  if (typeof asset === 'string') {
    return asset;
  }
  
  return '';
};

// Fallback placeholder if assets fail to load
export const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23222" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="18" fill="%23666" text-anchor="middle" dy=".3em"%3E[Image loading...]%3C/text%3E%3C/svg%3E';
