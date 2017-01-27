import { MusicLessonPage } from './app.po';

describe('music-lesson App', function() {
  let page: MusicLessonPage;

  beforeEach(() => {
    page = new MusicLessonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
