import { RemoveCommaPipe } from './../pipes/remove-comma.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import NG-Prime Modules
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

const modules = [
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  InputTextareaModule,
  ButtonModule,
  ProgressSpinnerModule,
  TableModule,
  ToastModule,
  CardModule
]

@NgModule({
  declarations: [RemoveCommaPipe],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules, RemoveCommaPipe]
})
export class SharedModule { }
