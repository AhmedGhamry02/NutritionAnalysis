import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-nutrition',
  templateUrl: './total-nutrition.component.html',
  styleUrls: ['./total-nutrition.component.scss']
})
export class TotalNutritionComponent implements OnInit {

  @Input() totalNutrition!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
