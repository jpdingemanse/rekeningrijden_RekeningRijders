import { RekeningRijdersAngularPage } from './app.po';

describe('rekening-rijders-angular App', function() {
  let page: RekeningRijdersAngularPage;

  beforeEach(() => {
    page = new RekeningRijdersAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
