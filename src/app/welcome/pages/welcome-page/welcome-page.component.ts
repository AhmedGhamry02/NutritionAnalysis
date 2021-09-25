import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MyApiService } from './../../../shared/services/my-api.service';
import { Food } from '../../models/food';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  providers: [MessageService],
})
export class WelcomePageComponent implements OnInit {
  foodsInput = new FormControl();
  myFoods!: string[];
  myFoodsData!: Food[];
  btnLoading: boolean = false;

  constructor(
    private foodApiService: MyApiService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  analyse() {
    this.btnLoading = true;
    let foodsInputValue = this.foodsInput.value;
    this.myFoods = foodsInputValue.split('\n');
    this.myFoodsData = this.myFoods.map((food: any) => {
      let newfoodArray = food.split(' ');
      let obj = {
        quantity: +newfoodArray[0],
        unit: newfoodArray[1],
        name: newfoodArray[2],
      };
      return obj;
    });
    this.foodApiService
      .getFullRecipeAnalysis(this.myFoods)
      .subscribe((res: any) => {
        if (res.calories == 0 && res.totalWeight == 0) {
          this.messageService.add({
            severity: 'error',
            summary: 'Invalid Ingredient ',
            detail:
              'Please check the ingredient spelling or if you have entered a quantities for the ingredients.',
          });
          this.btnLoading = false;
          return;
        }
        localStorage.setItem('nutritional_analysis', JSON.stringify(res));
        this.btnLoading = false;
        this.router.navigate(['nutrition-summary'], { queryParams: { ingredient: this.myFoods.join() } });
      });
  }
}
