import { GithubBattlePage } from './app.po';

describe('github-battle App', () => {
  let page: GithubBattlePage;

  beforeEach(() => {
    page = new GithubBattlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
