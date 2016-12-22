import { BblNg2Page } from './app.po';

describe('bbl-ng2 App', function() {
  let page: BblNg2Page;

  beforeEach(() => {
    page = new BblNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
