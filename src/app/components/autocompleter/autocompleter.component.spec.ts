import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleterComponent } from './autocompleter.component';

describe('Een aantal basale javascript/typescript patronen' , () => {
  it('Een eenvoude iteratie in ts', () => {
    const beesten = ['slak', 'schildpad', 'haas'];
    for (const beest of beesten) {
      console.log(beest);
    }
  });
  it('Een eenvoude iteratie met traditionele iteratie', () => {
    const beesten = ['slak', 'schildpad', 'haas'];
    for (let index = 0; index < beesten.length; index++) {
      console.log(beesten[index]);
    }
    expect(true).toBeTruthy();
  });
  it('iteratie over objecten', () => {
    const beesten = [{naam: 'slak', age: 1}, {naam: 'schildpad', age: 100}, {naam: 'haas', age: 3}];
    for (const beest of beesten) {
      for (const prop of Object.keys(beest)) {
        console.log(beest[prop]);
      }
    }
    expect(true).toBeTruthy();
  });

  it('runtime toevoegen van properties', () => {
    let beest: any;
    beest = {naam: 'slak', age: 1};
    beest.isUitgestorven = false;
    console.log(beest);
    expect(true).toBeTruthy();
  });

  it('runtime verwijderen van properties', () => {
    let beest: any;
    beest = {naam: 'slak', age: 1};
    beest.isUitgestorven = false;
    console.log(beest);
    delete beest.isUitgestorven;
    console.log(beest);
    expect(true).toBeTruthy();
  });
  it('Wat doet de modulo operator', () => {
    const getallenReeks = [0, 1, 2, 3, 4];
    for (const getal of getallenReeks) {
      console.log((getal + 5) % getallenReeks.length );
    }
  });
});




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

// Alles hierboven is een opdracht
// Hieronder is voor liefhebbers en op dit moment optioneel

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
    expect(autocompleter.results[0].highlight).toBeTruthy();
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
