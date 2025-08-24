import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SweetAlertsModule } from 'app/main/extensions/sweet-alerts/sweet-alerts.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductCategoryService } from './product-category/product-category.service';
import { CreateCategoryComponent } from './product-category/create-category/create-category.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

@NgModule({
  declarations: [SettingsComponent, ProductCategoryComponent, CreateCategoryComponent, CompanySettingsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    NgxDatatableModule,
    SweetAlertsModule,
    SettingsRoutingModule
  ],
  providers: [ProductCategoryService]
})
export class SettingsModule {}
