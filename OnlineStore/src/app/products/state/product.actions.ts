import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from '../../interfaces/product.interface';

export const loadProducts = createAction(
  '[Product List Component] Load Products', 
  props<{ url: string }>()
);

export const loadProductSuccess = createAction(
  '[Product Effect] Load Product Success', 
  props<{ products: Product[] }>()
);

export const loadProductFailure = createAction(
  '[Product Effect] Load Product Failure', 
  props<{ error: any }>()
);





export const addProduct = createAction(
  '[Product/API] Add Product',
  props<{ product: Product }>()
);

export const upsertProduct = createAction(
  '[Product/API] Upsert Product',
  props<{ product: Product }>()
);

export const addProducts = createAction(
  '[Product/API] Add Products',
  props<{ products: Product[] }>()
);

export const upsertProducts = createAction(
  '[Product/API] Upsert Products',
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Update<Product> }>()
);

export const updateProducts = createAction(
  '[Product/API] Update Products',
  props<{ products: Update<Product>[] }>()
);

export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ id: string }>()
);

export const deleteProducts = createAction(
  '[Product/API] Delete Products',
  props<{ ids: string[] }>()
);

export const clearProducts = createAction(
  '[Product/API] Clear Products'
);
