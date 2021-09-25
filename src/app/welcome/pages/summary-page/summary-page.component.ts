import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  totalNutrition!: any;
  ingredientsList!: any[];
  showTotalNutrition: boolean = false;
  showEmptyContent: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.gettotalNutrition) {
      this.showEmptyContent = true;
    } else {
      this.totalNutrition = JSON.parse(this.gettotalNutrition);
      this.ingredientsList = this.totalNutrition.ingredients;
      console.log(this.totalNutrition);
    }
  }

  get gettotalNutrition(): string {
    return localStorage.getItem('nutritional_analysis')!;
  }

}
