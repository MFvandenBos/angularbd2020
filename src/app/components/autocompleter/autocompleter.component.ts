import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocompleter.component.html',
  styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent implements OnInit {
  query = new FormControl();
  @Input() data: any[];
  results: any[];
  @Input() displayPropery: string;
  @Output() itemSelected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  autocomplete() {
    this.results = [];
    for (const item of this.data) {
      for (const prop of Object.keys(item)) {
        if (item[prop] && item[prop].toString().toLowerCase().includes(this.query.value.toString().toLowerCase())) {
          this.results.push(item);
          break;
        }
      }
    }
  }

  next() {
    // Zoek in array van resultaten naar het het item met de highlight property
    // Haal daar de property highlight weg
    // Plaats de de property highlight op het daarop volgende item
    for (let index = 0; index < this.results.length; index++) {
      if (this.results[index].highlight) {
        delete this.results[index].highlight;
        this.results[(index + 1) % this.results.length ].highlight = true;
        return;
      }
    }
    this.results[0].highlight = true;
  }

  select() {
    const selectedItem = this.results.find(r => r.highlight);
    this.itemSelected.emit(selectedItem);
  }
}
