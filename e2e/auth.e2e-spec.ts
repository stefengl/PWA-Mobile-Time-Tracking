import { AppPage } from './app.po';

describe('Testing the authentication features', () => {
  let page: AppPage;

  beforeEach((done) => {
    page = new AppPage();
    page.init().then(() => done());
  });

  it('Clicking registration button should navigate to /registration', (done) => {
    const registrationUrl = '/registration';

    page.navigateTo('/').then(() => {
      page.clickRegistrationButton()
        .then(() => {
          page.getCurrentUrl()
            .then((actualUrl: string) => {
              expect(actualUrl).toMatch(registrationUrl);
              done();
            });
        });
    });
  });


  it('Clicking registration button should navigate to /registration', (done) => {
    const registrationUrl = '/registration';

    page.navigateTo('/').then(() => {
      page.clickRegistrationButton()
        .then(() => {
          page.getCurrentUrl()
            .then((actualUrl: string) => {
              expect(actualUrl).toMatch(registrationUrl);
              done();
            });
        });
    });
  });


  it('Successful registration should route to tabs', (done) => {
    const mail = `${Math.floor(1 + Math.random() * 1000).toString()}@${Math.floor(1 + Math.random() * 1000).toString()}.com`;
    const pw = 'Affe1234';
    const expectedUrl = '/tabs';

    page.navigateTo('/registration');
    page.register(mail, pw).then(() => {
      page.getCurrentUrl().then((url: string) => {
        expect(url).toMatch(expectedUrl);
        done();
      });
    });
  });


  it('Successful login should route to tabs', (done) => {
    const mail = 'stef.engl.se@gmail.com';
    const pw = 'Affe1234';
    const expectedUrl = '/tabs';

    page.navigateTo('');
    page.login(mail, pw).then(() => {
      page.getCurrentUrl().then((url: string) => {
        expect(url).toMatch(expectedUrl);
        done();
      });
    });
  });

});



