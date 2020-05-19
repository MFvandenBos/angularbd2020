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

  it('should ignore falsy values', () => {
    autocompleter = new AutocompleterComponent();
    // Remark: all these values are falsy values
    autocompleter.data = [
      {x : undefined},
      {x : null},
      {x : false}
    ];
    autocompleter.query.setValue('E');
    autocompleter.autocomplete();
    expect(autocompleter.results.length).toEqual(0);
  });

  it('should autocomplete on numbers', () => {
    autocompleter = new AutocompleterComponent();
    // Remark: all these values are falsy values
    autocompleter.data = [
      {x : 1},
      {x : 'a'},
    ];
    autocompleter.query.setValue(1);
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual( [{x : 1}]);
  });
});

describe(' Navigating through the result list ', () => {
  it('When entering the value in an input box the first matching entry should be highlighted', () => {
    // setup The A van Arrange (klaar zetten.)
    // Black box approach, we don't assume any knowledge of the component
    const autocompleter = new AutocompleterComponent();
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();

    // Act
    autocompleter.next();
    expect(autocompleter.results[0].highlight).toBe(true);
  });

  it('Should navigate from the highlighted item to the next', () => {
    // setup The A van Arrange (klaar zetten.)
    // Black box approach, we don't assume any knowledge of the component
    const autocompleter = new AutocompleterComponent();
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    autocompleter.next();
    // Act
    autocompleter.next();
    expect(autocompleter.results[0].highlight).toBe(undefined);
    expect(autocompleter.results[1].highlight).toBe(true);
  });

  it('Should navigate from the highlighted from the last highlighted item to the first', () => {
    // setup The A van Arrange (klaar zetten.)
    // Black box approach, we don't assume any knowledge of the component
    const autocompleter = new AutocompleterComponent();
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    for (const result of autocompleter.results) {
      autocompleter.next();
    }
    // Check the assumptions
    expect(autocompleter.results[0].highlight).toBe(undefined);
    expect(autocompleter.results[autocompleter.results.length - 1].highlight).toBe(true);
    // Act
    autocompleter.next();
    expect(autocompleter.results[0].highlight).toBe(true);
    expect(autocompleter.results[autocompleter.results.length - 1].highlight).toBe(undefined);
  });

});
