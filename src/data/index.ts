import type { Brand, Product } from './types';
import rittal from './brands/rittal';
import phoenixContact from './brands/phoenix-contact';
import legrand from './brands/legrand';
import zpas from './brands/zpas';
import weiss from './brands/weiss';
import hitec from './brands/hitec';

// Register every brand here — the only line you touch when adding a new brand file.
export const brands: Brand[] = [rittal, phoenixContact, legrand, zpas, weiss, hitec];

export interface CatalogProduct extends Product {
  brand: Brand;
}

// Flattened list of all products with their brand attached — used by catalog & search.
export const allProducts: CatalogProduct[] = brands.flatMap((b) =>
  b.products.map((p) => ({ ...p, brand: b }))
);

export const getBrand = (id: string): Brand | undefined =>
  brands.find((b) => b.id === id);

export const getProduct = (brandId: string, productId: string): Product | undefined =>
  getBrand(brandId)?.products.find((p) => p.id === productId);

export const productsByBrand = (brandId: string): Product[] =>
  getBrand(brandId)?.products ?? [];

// For generateStaticParams()
export const brandSlugs = brands.map((b) => b.id);
export const productParams = brands.flatMap((b) =>
  b.products.map((p) => ({ brand: b.id, product: p.id }))
);
