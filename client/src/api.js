// Static data layer (no backend). Pages keep using `api.getProducts()` etc.,
// but data now comes from src/data.js instead of an API/DB.
import { PRODUCTS, GALLERY } from './data.js';

const delay = (data) => Promise.resolve(data);

export const api = {
  // Products
  getProducts: (params = {}) => {
    let list = [...PRODUCTS];
    if (params.featured === '1' || params.featured === 1) {
      list = list.filter((p) => p.featured);
    }
    if (params.category && params.category !== 'All') {
      list = list.filter((p) => p.category === params.category);
    }
    return delay(list);
  },

  // Gallery
  getGallery: () => delay([...GALLERY]),
};
