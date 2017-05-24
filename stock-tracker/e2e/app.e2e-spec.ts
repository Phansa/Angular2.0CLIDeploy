import { StockTrackerPage } from './app.po';

describe('stock-tracker App', () => {
  let page: StockTrackerPage;

  beforeEach(() => {
    page = new StockTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
