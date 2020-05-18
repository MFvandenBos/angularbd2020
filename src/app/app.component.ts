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

  frameworks: Framework[] = [];
  structureValue: any;
  structureControls: any;

  reactiveFormGroup = new FormGroup({
      naam: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      score: new FormControl('', [ Validators.required, Validators.min(2), Validators.max(10)]),
      logoUrl: new FormControl('', [Validators.pattern('^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*$')])
  });


  addFramework() {
      this.structureValue = util.inspect(this.reactiveFormGroup.value, {depth: 1});
      this.structureControls = util.inspect(this.reactiveFormGroup.controls, {depth: 1});
      this.frameworks.push(this.reactiveFormGroup.value);
  }
}
