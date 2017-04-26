import { FirstTestAppPage } from './app.po';

describe('first-test-app App', function() {
  let page: FirstTestAppPage;

  beforeEach(() => {
    page = new FirstTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
