import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  select1 = [
    { currencyname: "Rupees" },
    { currencyname: "Dollars" },
    { currencyname: "Riyals" },
    { currencyname: "Euros" },
    { currencyname: "Dinar" }
  ];
  public selected1: string = "Rupees";
  public selected2: string = "Dollars";

  public Num1: number;
  public Num2: number;

  public Rupees: number;
  public Dollars: number;
  public Riyals: number;
  public Euros: number;
  public Dinar: number;

  check1(selected1: string, selected2: string) {
    if(selected1 ==  selected2){
      this.Num2 = this.Num1;
    }
    else if (selected1 == 'Rupees' && selected2 == 'Dollars') {
      this.Num2 = 0.014*this.Num1;
    }
    else if (selected1 == 'Rupees' && selected2 == 'Riyals') {
      this.Num2 = 0.05 * this.Num1;
    }
    else if (selected1 == 'Rupees' && selected2 == 'Euros') {
      this.Num2 = 0.011 * this.Num1;
      
    }
    else if (selected1 == 'Rupees' && selected2 == 'Dinar') {
      this.Num2 = 0.0042 * this.Num1;
      
    }
    //DOLLARS

    else if (selected1 == 'Dollars' && selected2 == 'Rupees') {
      this.Num2 = 72.39 * this.Num1;
    }
    else if (selected1 == 'Dollars' && selected2 == 'Riyals') {
      this.Num2 = 3.75 * this.Num1;
    }
    else if (selected1 == 'Dollars' && selected2 == 'Dinar') {
      this.Num2 = 0.30 * this.Num1;
    }
    else if (selected1 == 'Dollars' && selected2 == 'Euros') {
      this.Num2 = 0.82 * this.Num1;
    }
    // RIYALS
    else if (selected1 == 'Riyals' && selected2 == 'Rupees') {
      this.Num2 = 19.30 * this.Num1;
    }
    else if (selected1 == 'Riyals' && selected2 == 'Dollars') {
      this.Num2 = 0.27 * this.Num1;
    }
    else if (selected1 == 'Riyals' && selected2 == 'Dinar') {
      this.Num2 = 0.08 * this.Num1;
      
    }
    else if (selected1 == 'Riyals' && selected2 == 'Euros') {
      this.Num2 = 0.22 * this.Num1;
    }

    //EUROS
    else if (selected1 == 'Euros' && selected2 == 'Rupees') {
      this.Num2 = 88.27 * this.Num1;
    }
    else if (selected1 == 'Euros' && selected2 == 'Dollars') {
      this.Num2 = 1.22 * this.Num1;
    }
    else if (selected1 == 'Euros' && selected2 == 'Dinar') {
      this.Num2 = 0.37 * this.Num1;
      
    }
    else if (selected1 == 'Euros' && selected2 == 'Riyals') {
      this.Num2 = 4.57 * this.Num1;
    }
    //DINAR
    else if (selected1 == 'Dinar' && selected2 == 'Rupees') {
      this.Num2 = 240.50 * this.Num1;
    }
    else if (selected1 == 'Dinar' && selected2 == 'Dollars') {
      this.Num2= 3.32 * this.Num1;
    }
    else if (selected1=='Dinar' && selected2 =='Riyals') {
      this.Num2 = 12.46 * this.Num1;
    }
    else if (selected1 == 'Dinar' && selected2 == 'Euros') {
      this.Num2 = 2.72 * this.Num1;
      
    }
  }

  check2(selected1: string, selected2: string) {
    if(selected1 ==  selected2){
      this.Num2 = this.Num1;
    }
    else if (selected1 == 'Rupees' && selected2 == 'Dollars') {
      this.Num1 = 72.39*this.Num2;
    }
    else if (selected1 == 'Rupees' && selected2 == 'Riyals') {
      this.Num2 = 19.43 * this.Num1;
    }
    else if (selected1 == 'Rupees' && selected2 == 'Euros') {
      this.Num2 = 89.22 * this.Num1;
      
    }
    else if (selected1 == 'Rupees' && selected2 == 'Dinar') {
      this.Num2 = 242.33 * this.Num1;
      
    }
    //DOLLARS

    else if (selected1 == 'Dollars' && selected2 == 'Rupees') {
      this.Num1 = 0.014 * this.Num2;
    }
    else if (selected1 == 'Dollars' && selected2 == 'Riyals') {
      this.Num1 = 0.27 * this.Num2;
    }
    else if (selected1 == 'Dollars' && selected2 == 'Dinar') {
      this.Num1 = 3.33 * this.Num2;
    }
    else if (selected1 == 'Dollars' && selected2 == 'Euros') {
      this.Num1 = 1.22 * this.Num2;
    }
    // RIYALS
    else if (selected1 == 'Riyals' && selected2 == 'Rupees') {
      this.Num1 = 0.05 * this.Num2;
    }
    else if (selected1 == 'Riyals' && selected2 == 'Dollars') {
      this.Num1 = 3.64 * this.Num2;
    }
    else if (selected1 == 'Riyals' && selected2 == 'Dinar') {
      this.Num1 = 12.11 * this.Num2;
      
    }
    else if (selected1 == 'Riyals' && selected2 == 'Euros') {
      this.Num1 = 4.46 * this.Num2;
    }

    //EUROS
    else if (selected1 == 'Euros' && selected2 == 'Rupees') {
      this.Num1 = 0.011 * this.Num2;
    }
    else if (selected1 == 'Euros' && selected2 == 'Dollars') {
      this.Num1 = 0.82 * this.Num2;
    }
    else if (selected1 == 'Euros' && selected2 == 'Dinar') {
      this.Num1 = 2.72 * this.Num2;
      
    }
    else if (selected1 == 'Euros' && selected2 == 'Riyals') {
      this.Num1 = 0.22 * this.Num2;
    }
    //DINAR
    else if (selected1 == 'Dinar' && selected2 == 'Rupees') {
      this.Num1 = 0.0041* this.Num2;
    }
    else if (selected1 == 'Dinar' && selected2 == 'Dollars') {
      this.Num1= 0.3 * this.Num2;
    }
    else if (selected1=='Dinar' && selected2 =='Riyals') {
      this.Num1 = 0.083 * this.Num2;
    }
    else if (selected1 == 'Dinar' && selected2 == 'Euros') {
      this.Num1 = 0.37 * this.Num2;
      
    }
  }
}