import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngBD2020';
  isNotVisible = true;
  nu = new Date();

  locaties = [
    {stad: 'Adam', land: 'Nederland'},
    {stad: 'Edam', land: 'Nederland'},
    {stad: 'Obdam', land: 'Nederland'},
  ];
  // [] initialiseer je een array in ts/js
  bedrag: number;
  printNaarConsole() {
    console.log('Hello Angular!');
  }

}
