// utils/categories.ts

import { getCategories } from '../db/route';

export async function fetchCategories() {
  return await getCategories();
}
