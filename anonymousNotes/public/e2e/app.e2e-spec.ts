import { AnonymouseNotesPage } from './app.po';

describe('anonymouse-notes App', () => {
  let page: AnonymouseNotesPage;

  beforeEach(() => {
    page = new AnonymouseNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
