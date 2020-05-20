import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HighlighterService} from '../../services/highlighter.service';

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocompleter.component.html',
  styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent implements OnInit {
  query = new FormControl();
  @Input() data: any[];
  results: any[];
  @Input() displayProperty: string;
  @Output() itemSelected = new EventEmitter();

  // highlighterService: HighlighterService;
  // De constructor is de plek waar je service binnenhaalt
  // constructor(highlighterService: HighlighterService) {
  //   this.highlighterService = highlighterService;
  // }

  constructor(private highlighterService: HighlighterService) {
    // this.highlighterService = highlighterService;
    // de constructor wordt in Angular alleen gebruikt om services
    // binnen te halen. Die services worden vaak dependencies van onze
    // component.
    // Vandaar ook dat dit ook wel dependency injection wordt genoemd

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
      this.highlighterService.next(this.results);
  }

  select() {
    const selectedItem = this.results.find(r => r.highlight);
    this.itemSelected.emit(selectedItem);
  }
}
