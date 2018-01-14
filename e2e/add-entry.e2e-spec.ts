import { AppPage } from './app.po';

describe('Authenticated User wants to create a new TimeRecord', () => {

    let app: AppPage;

    beforeEach((done) => {
        app = new AppPage();
        app.init();
        app.setupWindowSize().then(() => {
            done();
        });
    });

    it('User with valid credentials should login', (done) => {
        let expected = '/'

        app.navigateTo('/login');
        app.loginWith('stef.engl.se@gmail.com', 'Affe1234').then(() => {

            app.getCurrentUrl().then((url: string) => {
                expect(url).toMatch(expected);
                done();
            })
        });
    });

    it('', (done) => {
        let expected = '/'

        app.navigateTo('/login');
        app.loginWith('stef.engl.se@gmail.com', 'Affe1234').then(() => {

            app.getCurrentUrl().then((url: string) => {
                expect(url).toMatch(expected);
                done();
            })
        });
    });


});
