import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocompleter.component.html',
  styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent implements OnInit {
  query: FormControl = new FormControl();
  @Input() data: any[];
  results: any[];

  constructor() {
  }

  ngOnInit() {
  }

  autocomplete() {
    this.results = [];
    for (const item of this.data) {
      for (const prop of Object.keys(item)) {
        if (item[prop] && item[prop].includes(this.query.value)) {
          this.results.push(item);
          break;
        }
      }
    }
  }

  next() {

  }
}
