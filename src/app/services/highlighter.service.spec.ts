import { TestBed } from '@angular/core/testing';

import { HighlighterService } from './highlighter.service';


describe(' Navigating through the result list ', () => {
  it('When entering the value in an input box the first matching entry should be highlighted', () => {
    // setup The A van Arrange (klaar zetten.)
    // Black box approach, we don't assume any knowledge of the component
    const highlighterService = new HighlighterService();
    const data: any[] = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];

    highlighterService.next(data);
    expect(data[0].highlight).toBeTruthy();
  });

  it('Should navigate from the highlighted item to the next', () => {
    const highlighterService = new HighlighterService();
    const data: any[] = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];

    highlighterService.next(data);
    // Act
    highlighterService.next(data);
    expect(data[0].highlight).toBe(undefined);
    expect(data[1].highlight).toBe(true);
  });

  it('Should navigate from the highlighted from the last highlighted item to the first', () => {
    const highlighterService = new HighlighterService();
    const data: any[] = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];

    for (const item of data) {
      highlighterService.next(data);
    }

    highlighterService.next(data);
    expect(data[0].highlight).toBe(true);
    expect(data[data.length - 1].highlight).toBe(undefined);
  });
});
