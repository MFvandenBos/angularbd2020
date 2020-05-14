import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Framework} from './model/framework';
import * as util from 'util';
@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  frameworks: Framework[] = [];
  structureValue: any;
  structureControls: any;

  reactiveFormGroup = new FormGroup({
      naam: new FormControl(''),
      score: new FormControl(''),
      logoUrl: new FormControl('')
  });


  addFramework() {
      this.structureValue = util.inspect(this.reactiveFormGroup.value, {depth: 1});
      this.structureControls = util.inspect(this.reactiveFormGroup.controls, {depth: 1});
      this.frameworks.push(this.reactiveFormGroup.value);
  }
}
