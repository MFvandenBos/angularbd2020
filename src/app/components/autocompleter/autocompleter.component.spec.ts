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

  it('should filter all items containing an e in an arbitrary property', () => {
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

  it('should autoComplete with case-insensitive values', () => {
    autocompleter = new AutocompleterComponent();
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([
      {x : 'hei'},
      {x : 'hEy'}
    ]);
  });

  it('should autoComplete with case-insensitive query value', () => {
    autocompleter = new AutocompleterComponent();
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('E');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([
      {x : 'hei'},
      {x : 'hEy'}
    ]);
  });

  it('should autoComplete with case-insensitive query value', () => {
    autocompleter = new AutocompleterComponent();
    // Remark: all these values are falsy values
    autocompleter.data = [
      {x : undefined},
      {x : null},
      {x : false}
    ];
    autocompleter.query.setValue('E');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([
      {x : 'hei'},
      {x : 'hEy'}
    ]);
  });
});
