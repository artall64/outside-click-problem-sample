import { OutsideClickSamplePage } from './app.po';

describe('outside-click-sample App', () => {
  let page: OutsideClickSamplePage;

  beforeEach(() => {
    page = new OutsideClickSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
