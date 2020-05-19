import {Component, Input, OnInit} from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

  autocomplete() {
    this.results = [];
    for (const item of this.data) {
      const Larray: string[] = Object.keys(item);
      for (const prop of Larray) {
        if (item[prop].includes(this.query.value)) {
           this.results.push(item);
           break;
         }
       }
    }
  }
}
