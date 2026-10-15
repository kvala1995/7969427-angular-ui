import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  // Need to add formsModule to use directives two way data binding
  // Two way databinding can only be used on input element we cannot use on display element
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {

  currentDate:Date = new Date();
  firstName:string = "krishna vamsi";
  version:number = 4.12;

  input:string = "label";

  city_1:string = "Vijayawada";
  city_2:string = "Dehardun";
  city_3:string = "Flint";
  selectedCity:string = "";
}
