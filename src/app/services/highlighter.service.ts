import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlighterService {

  constructor() { }

  next(data: any[]) {
    // Zoek in array van resultaten naar het het item met de highlight property
    // Haal daar de property highlight weg
    // Plaats de de property highlight op het daarop volgende item
    for (let index = 0; index < data.length; index++) {
      if (data[index].highlight) {
        delete data[index].highlight;
        data[(index + 1) % data.length ].highlight = true;
        return;
      }
    }
    data[0].highlight = true;
  }
}
