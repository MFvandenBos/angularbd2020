import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleterComponent } from './autocompleter.component';

describe('AutocompleterComponent', () => {
  let autocompleter: AutocompleterComponent;


  it('should filter all items containing an e', () => {
    autocompleter = new AutocompleterComponent();
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hoi'},
      {x : 'hey'},
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([{x : 'hey'}]);
  });

  it('should create', () => {
    autocompleter = new AutocompleterComponent();
    autocompleter.data = [
      {x : 'ho', y : 'hallo'},
      {x : 'hoi',  y : 'hello'},
      {x : 'hey',  y : 'hello'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([
      {x : 'hoi',  y : 'hello'},
      {x : 'hey',  y : 'hello'}
      ]);
  });
});
