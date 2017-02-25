import { ContactsShankyPage } from './app.po';

describe('contacts-shanky App', () => {
  let page: ContactsShankyPage;

  beforeEach(() => {
    page = new ContactsShankyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
