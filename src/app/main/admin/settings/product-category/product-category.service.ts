import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ProductCategory {
  id: number;
  name: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private categories: ProductCategory[] = [
    { id: 31, name: 'مياه', createdAt: '2025-08-11' },
    { id: 30, name: 'Shirt', createdAt: '2025-08-06' },
    { id: 29, name: 'Fruits', createdAt: '2025-08-06' },
    { id: 28, name: 'Electronics', createdAt: '2025-07-21' },
    { id: 27, name: 'tiles', createdAt: '2025-07-19' },
    { id: 26, name: 'building', createdAt: '2025-07-19' },
    { id: 25, name: 'Test', createdAt: '2025-07-09' },
    { id: 24, name: 'shoes', createdAt: '2025-07-05' },
    { id: 23, name: 'tom', createdAt: '2025-06-30' },
    { id: 22, name: 'Test category', createdAt: '2025-06-24' }
  ];

  constructor() {}

  getCategories(): Observable<ProductCategory[]> {
    return of(this.categories).pipe(delay(500));
  }

  createCategory(category: Omit<ProductCategory, 'id' | 'createdAt'>): Observable<ProductCategory> {
    const newCategory: ProductCategory = {
      id: Math.max(...this.categories.map(c => c.id)) + 1,
      name: category.name,
      createdAt: new Date().toISOString().split('T')[0]
    };
    this.categories.unshift(newCategory);
    return of(newCategory).pipe(delay(300));
  }

  updateCategory(id: number, category: Partial<ProductCategory>): Observable<ProductCategory> {
    const index = this.categories.findIndex(c => c.id === id);
    if (index !== -1) {
      this.categories[index] = { ...this.categories[index], ...category };
      return of(this.categories[index]).pipe(delay(300));
    }
    throw new Error('Category not found');
  }

  deleteCategory(id: number): Observable<boolean> {
    const index = this.categories.findIndex(c => c.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      return of(true).pipe(delay(300));
    }
    return of(false).pipe(delay(300));
  }
}
