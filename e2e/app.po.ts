import { browser, by, element, protractor } from 'protractor';
import { setTimeout } from 'timers';

export class AppPage {

  constructor() { }

  init() {
    return new Promise((resolve, reject) => {
      const origFn = browser.driver.controlFlow().execute;
      browser.driver.controlFlow().execute = function () {
        const args = arguments;
        origFn.call(browser.driver.controlFlow(), function () {
          return protractor.promise.delayed(3);
        });
        return origFn.apply(browser.driver.controlFlow(), args);
      };
      browser.ignoreSynchronization = true;
      browser.waitForAngularEnabled(false)
        .then(() => resolve());
    });
  }

  navigateTo(extension: string) {
    return browser.get(extension);
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  clickRegistrationButton() {
    const el = element(by.css('.registration-btn'));
    return el.click();
  }

  register(mail_value: string, pw_value: string) {
    const mail = element(by.css('input[name=regi-email]'));
    const pw = element(by.css('input[name=regi-pw]'));
    const pwConfirm = element(by.css('input[name=regi-pw-confirm]'));
    const submitBtn = element(by.css('.registration-btn'));

    return new Promise((resolve, reject) => {
      mail.sendKeys(mail_value).then(() => {
        pw.sendKeys(pw_value).then(() => {
          pwConfirm.sendKeys(pw_value).then(() => {
            submitBtn.click().then(() => {
              setTimeout(() => {
                resolve();
              }, 5000);
            });
          });
        });
      });
    });
  }


  login(mail_value: string, pw_value: string) {
    const mail = element(by.css('input[name=auth-email]'));
    const pw = element(by.css('input[name=auth-pw]'));
    const submitBtn = element(by.css('.login-btn'));

    return new Promise((resolve, reject) => {
      mail.sendKeys(mail_value).then(() => {
        pw.sendKeys(pw_value).then(() => {
          submitBtn.click().then(() => {
            setTimeout(() => {
              resolve();
            }, 5000);
          });
        });
      });
    });
  }

  addEntry() {
    const categoryToggle = element(by.css('.mat-select-value'));
    const categoryOption = element(by.css('.mat-option-text'));
    const timeSlider = element(by.css('mat-slider[name=entry-time-slider]'));
    const submit = element(by.css('.record-submit-btn'));

    return new Promise((resolve, reject) => {
      categoryToggle.click()
        .then(() => categoryOption.click()
          .then(() => {
            browser.actions().dragAndDrop(timeSlider, { x: 100, y: 0 }).perform()
              .then(() => {
                submit.click().then(() => setTimeout(() => {
                  resolve(true);
                }, 5000));
              });
          }));
    });
  }

}
