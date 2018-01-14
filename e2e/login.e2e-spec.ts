import { AppPage } from './app.po';


describe('Unauthenticated user wants to route to home', () => {
  let page: AppPage;

  beforeEach((done) => {
    page = new AppPage();
    page.init();
    page.setupWindowSize().then(() => done());
  });


  it('Navigating to home should redirect to login', (done) => {
    let result = '';
    const expectedUrl = '/login';

    page.navigateTo('/');
    page.getCurrentUrl()
      .then((url: string) => {
        result = url;
        expect(result).toMatch(expectedUrl);
        done();
      });
  });


  it('Clicking registration button should navigate to /registration', (done) => {
    const registrationUrl = '/registration';

    page.navigateTo('/login');
    page.clickRegistrationButton()
      .then(() => {
        page.getCurrentUrl().then(url => {
          expect(url).toMatch(registrationUrl);
          done();
        });
      });
  });


  it('Clicking submit button with valid input values should route to home', (done) => {
    const mail = `${Math.floor(1 + Math.random() * 1000).toString()}@${Math.floor(1 + Math.random() * 1000).toString()}.com`;
    const pw = 'Affe1234';

    const expectedUrl = '/';

    page.navigateTo('/registration');
    page.setInputValues(mail, pw).then(() => {
      page.submitRegistration().then(() => {
        page.getCurrentUrl().then((url: string) => {
          expect(url).toMatch(expectedUrl);
          done();
        });
      });
    });
  });

});
