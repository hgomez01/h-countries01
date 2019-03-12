import { Language } from './language.model';
import { Currency } from './currency.model';

export class Country {
    // name: string;
    // flag: string;
    // capital: string;
    // subregion: string;
    // population: number;
/*    
    languages: Language[];
    currencies: Currency[];
*/


constructor(
    public name: string,
    public flag: string,
    public capital: string,
    public population: number,
  ) { }
}
