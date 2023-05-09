import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Diego';
  age: number = 30;
  job = 'Programador';
  hobbis = ['correr', 'jogar', 'estudar'];
  car = {
    name: 'Polo',
    year: 2022,
  };
}
