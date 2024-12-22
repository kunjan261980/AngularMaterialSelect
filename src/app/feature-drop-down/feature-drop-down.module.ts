import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FeatureDropDownRoutingModule } from './feature-drop-down-routing.module';
import { FeatureDropDownComponent } from './feature-drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    FeatureDropDownComponent
  ],
  imports: [
    CommonModule,
    FeatureDropDownRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule
  ]
})
export class FeatureDropDownModule { }
