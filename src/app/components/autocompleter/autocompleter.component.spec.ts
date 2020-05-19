import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleterComponent } from './autocompleter.component';
import {HighlighterService} from '../../services/highlighter.service';

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
  const autocompleter = new AutocompleterComponent(new HighlighterService());


  it('should filter all items containing an e', () => {
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

