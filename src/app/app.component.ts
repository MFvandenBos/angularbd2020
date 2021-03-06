import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Framework} from './model/framework';
import * as util from 'util';
@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  frameworks: Framework[] = [{
    naam: 'Angular',
    score: 7,
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1920px-Angular_full_color_logo.svg.png'
  },
  {
    naam: 'React',
    score: 7,
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png'
  },
  {
    naam: 'Vue',
    score: 7,
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2560px-Vue.js_Logo_2.svg.png'
  }
  ];
  structureValue: any;
  structureControls: any;

  reactiveFormGroup = new FormGroup({
      naam: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      score: new FormControl('', [ Validators.required, Validators.min(2), Validators.max(10)]),
      logoUrl: new FormControl('', [Validators.pattern('^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*$')])
  });
  propertyToDisplay = 'naam';

  addFramework() {
      this.structureValue = util.inspect(this.reactiveFormGroup.value, {depth: 1});
      this.structureControls = util.inspect(this.reactiveFormGroup.controls, {depth: 1});
      this.frameworks.push(this.reactiveFormGroup.value);
  }

  eventFired(itemSelected: any) {
    console.log(itemSelected);
  }
}
