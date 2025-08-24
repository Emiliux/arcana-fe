import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'product-category',
        component: ProductCategoryComponent
      },
      {
        path: 'company-settings',
        component: CompanySettingsComponent
      },
      {
        path: '',
        redirectTo: 'product-category',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
