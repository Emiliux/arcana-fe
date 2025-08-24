import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private productCategoryService: ProductCategoryService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.categoryForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.categoryForm.invalid) {
      return;
    }

    this.loading = true;
    const categoryData = {
      name: this.categoryForm.value.name,
      description: this.categoryForm.value.description
    };

    this.productCategoryService.createCategory(categoryData).subscribe({
      next: result => {
        this.loading = false;
        this.activeModal.close(result);
      },
      error: error => {
        console.error('Error creating category:', error);
        this.loading = false;
        // Here you could show an error message to the user
      }
    });
  }

  onCancel(): void {
    this.activeModal.dismiss();
  }
}
