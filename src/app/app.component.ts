import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Framework} from './model/framework';

@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngBD2020';
  isNotVisible = true;
  nu = new Date();
  frameworks: Framework[] = [];
  reactiveFormGroup = new FormGroup({
    naam: new FormControl(''),
    score: new FormControl(''),
    logoUrl: new FormControl('')
  });
  locaties = [
    {stad: 'Adam', land: 'Nederland'},
    {stad: 'Edam', land: 'Nederland'},
    {stad: 'Obdam', land: 'Nederland'},
  ];
  printNaarConsole() {
    console.log('Hello Angular!');
  }
  // [] initialiseer je een array in ts/js

  addFramwork() {
    // console.log(this.reactiveFormGroup);
    const newFramework: Framework = {} as Framework;
    newFramework.naam = this.reactiveFormGroup.value.naam;
    newFramework.score = this.reactiveFormGroup.value.score;
    newFramework.logoUrl = this.reactiveFormGroup.value.logoUrl;
    this.frameworks.push(newFramework);
    // newFramework = {} as Framework;
  }
}
