import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Roles} from './roles/roles';

@Component({
  selector: 'app-root',
  imports: [Roles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:String = "angular application";
}
