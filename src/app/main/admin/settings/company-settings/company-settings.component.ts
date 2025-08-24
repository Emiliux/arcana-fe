import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {
  companyForm: FormGroup;
  loading = false;
  submitted = false;
  selectedLogo: File | null = null;
  logoPreview: string | null = null;

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      companyName: ['MEL ERP', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      tagline: ['Malaysian Food', [Validators.required, Validators.maxLength(200)]],
      address: ['8miles', [Validators.required, Validators.maxLength(500)]],
      phoneNumber: ['+50947152669', [Validators.required, Validators.pattern(/^[+]?[0-9\s\-()]+$/)]],
      emailAddress: ['scochnycojoassaint@hotmail.com', [Validators.required, Validators.email]],
      website: ['www.test.com', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      footer: ['this is test detailsss', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadCompanySettings();
  }

  get f() {
    return this.companyForm.controls;
  }

  loadCompanySettings(): void {
    // Simular carga de datos existentes
    // En una implementación real, esto vendría de un servicio
    console.log('Loading company settings...');
  }

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.validateLogo(file, event.target);
    }
  }

  validateLogo(file: File, inputElement: HTMLInputElement): void {
    // Validar tipo de archivo
    if (!file.type.includes('png')) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid File Type',
        text: 'Please select a PNG file',
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'OK'
      });
      inputElement.value = '';
      return;
    }

    // Validar tamaño (1024x1024 px)
    const img = new Image();
    img.onload = () => {
      if (img.width !== 1024 || img.height !== 1024) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Image Size',
          text: 'Image must be 1024x1024 pixels',
          confirmButtonColor: '#dc3545',
          confirmButtonText: 'OK'
        });
        inputElement.value = '';
        return;
      }

      // Si pasa todas las validaciones, procesar el archivo
      this.selectedLogo = file;
      this.createLogoPreview(file);
    };

    img.onerror = () => {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Image',
        text: 'Could not load the image. Please try another file.',
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'OK'
      });
      inputElement.value = '';
    };

    img.src = URL.createObjectURL(file);
  }

  createLogoPreview(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.logoPreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  removeLogo(): void {
    this.selectedLogo = null;
    this.logoPreview = null;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.companyForm.invalid) {
      return;
    }

    this.loading = true;

    // Simular actualización
    setTimeout(() => {
      console.log('Company settings updated:', this.companyForm.value);
      this.loading = false;
      this.submitted = false;
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Company settings updated successfully!',
        confirmButtonColor: '#28a745',
        confirmButtonText: 'Great!'
      });
    }, 2000);
  }

  onCancel(): void {
    this.companyForm.reset();
    this.submitted = false;
  }
}
