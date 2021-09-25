import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  apiURL = environment.apiURL;
  appID = environment.appID;
  appKey = environment.appKey;

  constructor(private http: HttpClient) { }

  getAnalysisSpecifiedFood(foodData: string) {
    let myParams = new HttpParams();
    myParams = myParams.append('app_id', this.appID);
    myParams = myParams.append('app_key', this.appKey);
    myParams = myParams.append('ingr', foodData);

    return this.http.get(`${this.apiURL}/nutrition-data`, { params: myParams })
  }

  getFullRecipeAnalysis(foodsData: string[]) {
    let myParams = {
      app_id: this.appID,
      app_key: this.appKey
    }
    let foodsDataObj = {
      ingr: foodsData
    }
    return this.http.post(`${this.apiURL}/nutrition-details`, foodsDataObj, { params: myParams })
  }

}
