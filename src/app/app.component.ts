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
  structureReactiveFormGroup: any;

  reactiveFormGroup = new FormGroup({
      naam: new FormControl(''),
      score: new FormControl(''),
      logoUrl: new FormControl('')
  });


  addFramework() {
      this.structureReactiveFormGroup = util.inspect(this.reactiveFormGroup.value, {depth: 1});
  }
}
