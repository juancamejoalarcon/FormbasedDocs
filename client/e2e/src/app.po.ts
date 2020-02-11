import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToCertifiedForm(certifiedForm) {
    return browser.get('/certified-forms/' + certifiedForm);
  }

  getFormTitle() {
    return element(by.css('.form-creator__fields-area__middle__initial-screen__form-title'));
  }

  startForm() {
    element(by.css('.button-filled--start-form')).click();
    this.sleep(500);
    element(by.css('.modal__content__modal-bottom--privacy')).click();
  }

  nextStep() {
    element(by.css('.form-creator__fields-area__bottom__arrow-button')).click();
    // browser.sleep(100);
  }

  sleep(time) {
    browser.sleep(time);
  }

}
