import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/modules/shared.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { SummaryBreakdownComponent } from './components/summary-breakdown/summary-breakdown.component';
import { TotalNutritionComponent } from './components/total-nutrition/total-nutrition.component';
import { EmptyContentComponent } from './components/empty-content/empty-content.component';


@NgModule({
  declarations: [
    WelcomePageComponent,
    SummaryPageComponent,
    SummaryBreakdownComponent,
    TotalNutritionComponent,
    EmptyContentComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
