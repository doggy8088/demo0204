import { Demo0204Page } from './app.po';

describe('demo0204 App', function() {
  let page: Demo0204Page;

  beforeEach(() => {
    page = new Demo0204Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
