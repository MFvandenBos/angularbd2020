import { DutchEuroPipe } from './dutch-euro.pipe';
import { registerLocaleData} from '@angular/common';
import localeNL from '@angular/common/locales/nl';

registerLocaleData(localeNL, 'nl');

// We maken gebruik van de Jasmine library

describe('DutchEuroPipe', () => {


  it('should format a whole number prefixed with an euro sign', () => {

    const pipe = new DutchEuroPipe();
    // \u00A0 is een non breaking space
    const euroSignPlusNonBreakableSpace = '€\u00A0' ;

    expect(pipe.transform(123)).toEqual(euroSignPlusNonBreakableSpace + '123');
  });
});

describe('een naam voor een verzameling tests', () => {

  it('hoe zit dat eigenlijk met string interpolation' , () => {
    const aValue = 'some string';
    const n = `Code example:
              string a = '${aValue}';`;

    console.log(n);

  });

  it('een naam voor een specifieke test2' , () => {
    // Hier kunnnen we de test uitvoeren
  });

  it('een naam voor een specifieke test3' , () => {
    // Hier kunnnen we de test uitvoeren
  });

});

describe(' title', () => {q
  it('title experimentje', () => {
    console.log('Hier kunnen we onze test uitvoeren');
  });
});
