import { AppPage } from "./app.po";
import { setTimeout } from "timers";

describe('Testing to add new entries as an authenticated user', () => {
    let page: AppPage;
    let mail = "stef.engl.se@gmail.com";
    let pw = 'Affe1234';

    beforeEach((done) => {
        page = new AppPage();
        page.init()
            .then(() => {
                page.navigateTo("")
                .then(() => {
                    page.login(mail, pw)
                        .then(() => {
                            done();
                        })
                })
            })
    });


    it('Authenticated user should be able to add new entries', (done) => {

        page.addEntry()
            .then((isSuccess: boolean) => {
                expect(isSuccess).toBe(true);
                done()
            })
    });

});
