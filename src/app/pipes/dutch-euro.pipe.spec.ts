import { DutchEuroPipe } from './dutch-euro.pipe';
import { registerLocaleData} from '@angular/common';
import localeNL from '@angular/common/locales/nl';

registerLocaleData(localeNL, 'nl');

// We maken gebruik van de Jasmine library

describe('DutchEuroPipe', () => {

  it('should format a whole number as is', () => {

    const pipe = new DutchEuroPipe();

    expect(pipe.transform(123)).toEqual('123');
  });

  it('should format a whole number prefixed with an euro sign', () => {

    const pipe = new DutchEuroPipe();
    // \u00A0 is een non breaking space
    const euroSignPlusNonBreakableSpace = '\u20AC\u00A0';

    expect(pipe.transform(123)).toEqual(euroSignPlusNonBreakableSpace + '123');
  });
});

describe('een naam voor een verzameling tests', () => {

  it('een naam voor een specifieke test1' , () => {
        // Hier kunnnen we de test uitvoeren
  });

  it('een naam voor een specifieke test2' , () => {
    // Hier kunnnen we de test uitvoeren
  });

  it('een naam voor een specifieke test3' , () => {
    // Hier kunnnen we de test uitvoeren
  });

});
