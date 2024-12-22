import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'featureDropDown', loadChildren: () => import('./feature-drop-down/feature-drop-down.module').then(m => m.FeatureDropDownModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
