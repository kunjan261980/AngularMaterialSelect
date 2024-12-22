import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureDropDownComponent } from './feature-drop-down.component';

const routes: Routes = [{ path: '', component: FeatureDropDownComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDropDownRoutingModule { }
