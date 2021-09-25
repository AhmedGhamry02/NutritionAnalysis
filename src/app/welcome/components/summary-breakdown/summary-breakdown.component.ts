import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-breakdown',
  templateUrl: './summary-breakdown.component.html',
  styleUrls: ['./summary-breakdown.component.scss']
})
export class SummaryBreakdownComponent implements OnInit {

  @Input() ingredientsList!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
