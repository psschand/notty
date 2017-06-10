import { NottyPage } from './app.po';

describe('notty App', () => {
  let page: NottyPage;

  beforeEach(() => {
    page = new NottyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
