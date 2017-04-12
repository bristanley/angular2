import { MyshoppinglistPage } from './app.po';

describe('myshoppinglist App', () => {
  let page: MyshoppinglistPage;

  beforeEach(() => {
    page = new MyshoppinglistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
