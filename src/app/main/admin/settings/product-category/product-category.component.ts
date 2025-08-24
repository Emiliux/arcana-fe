import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ProductCategory, ProductCategoryService } from './product-category.service';
import { CreateCategoryComponent } from './create-category/create-category.component';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  Math = Math;

  categories: ProductCategory[] = [];
  filteredCategories: ProductCategory[] = [];
  loading = false;
  searchForm: FormGroup;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  constructor(
    private productCategoryService: ProductCategoryService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.setupSearchListener();
  }

  loadCategories(): void {
    this.loading = true;
    this.productCategoryService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
        this.filteredCategories = [...categories];
        this.totalItems = categories.length;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading categories:', error);
        this.loading = false;
      }
    });
  }

  setupSearchListener(): void {
    this.searchForm.get('search')?.valueChanges.subscribe(searchTerm => {
      this.filterCategories(searchTerm);
    });
  }

  filterCategories(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredCategories = [...this.categories];
    } else {
      this.filteredCategories = this.categories.filter(
        category =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase()) || category.id.toString().includes(searchTerm)
      );
    }
    this.totalItems = this.filteredCategories.length;
    this.currentPage = 1;
  }

  openCreateCategory(): void {
    const modalRef = this.modalService.open(CreateCategoryComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static'
    });

    modalRef.result
      .then(result => {
        if (result) {
          this.loadCategories();
        }
      })
      .catch(() => {
        // Modal dismissed
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
  }

  get paginatedCategories(): ProductCategory[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredCategories.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
