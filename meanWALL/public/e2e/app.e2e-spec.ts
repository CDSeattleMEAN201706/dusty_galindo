import { MeanWallPage } from './app.po';

describe('mean-wall App', () => {
  let page: MeanWallPage;

  beforeEach(() => {
    page = new MeanWallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
