import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngbd2020';
  isNotVisible = true;
  locaties = [
    {stad: 'Adam', land: 'Nederland'},
    {stad: 'Edam', land: 'Nederland'},
    {stad: 'Obdam', land: 'Nederland'},
  ];
  printNaarConsole() {
    console.log('Hello Angular!');
  }
  // [] initialiseer je een array in ts/js

}
