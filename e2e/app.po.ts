import { browser, by, element, protractor } from 'protractor';

export class AppPage {

  constructor() { }

  init() {
    const origFn = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function () {
      const args = arguments;

      // queue 100ms wait
      origFn.call(browser.driver.controlFlow(), function () {
        return protractor.promise.delayed(5);
      });

      return origFn.apply(browser.driver.controlFlow(), args);
    };
  }
  setupWindowSize() {
    return browser.driver.manage().window().setSize(375, 667);
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

  setInputValues(mail_value: string, pw_value: string) {
    const mail = element(by.css('input[name=regi-email]'));
    const pw = element(by.css('input[name=regi-pw]'));
    const pwConfirm = element(by.css('input[name=regi-pw-confirm]'));

    return new Promise((resolve, reject) => {
      mail.sendKeys(mail_value).then(() => {
        pw.sendKeys(pw_value).then(() => {
          pwConfirm.sendKeys(pw_value).then(() => {
            resolve();
          });
        });
      });
    });
  }

  loginWith(mail_value: string, pw_value: string) {
    const mail = element(by.css('input[name=auth-email]'));
    const pw = element(by.css('input[name=auth-pw]'));

    return new Promise((resolve, reject) => {
      mail.sendKeys(mail_value).then(() => {
        pw.sendKeys(pw_value).then(() => {
          resolve();
        });
      });
    });
  }

  AddEntry() {
    const dateToggle = element(by.css('mat-datepicker-toggle'));
    const categoryToggle = element(by.css('mat-select[formControlName=record-category]'));
    const tagsToggle = element(by.css('mat-select[formControlName=record-tags]'));
    const timeSlider = element(by.css('mat-slider[formControlName=record-time]'));
    const note = element(by.css('input[formControlName=record-note]'));
    const submit = element(by.css('.record-submit-btn'));

    return new Promise((resolve, reject) => {
      dateToggle.click().then(() => {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
      });

      categoryToggle.click().then(() => {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
      });

      tagsToggle.click().then(() => {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
      });

      timeSlider.click().then(() => {
        browser.actions().sendKeys(protractor.Key.ARROW_UP).perform().then(() => {
          submit.click();
        });
      });
    });
  }

  submitRegistration() {
    return element(by.css('.registration-btn')).submit();
  }

}
