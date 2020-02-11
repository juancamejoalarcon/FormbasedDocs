import { AppPage } from './app.po';
import { by, element } from 'protractor';

describe('contrato de arrendamiento de habitacion', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should set the title properly', () => {
    page.navigateToCertifiedForm('contrato-arrendamiento-habitacion');
    setTimeout(() => {
      expect(page.getFormTitle().getText()).toBe('Contrato de arrendamiento de habitación');
    }, 3000);
  });

  // it('should set the first question', () => {
  //   page.startForm();
  //   page.sleep(500);

  //   expect(
  //     element(by.css('.form-creator__fields-area__field__middle__question')).getText()
  //   ).toBe('Lugar (ciudad o población) donde se realiza y firma el contrato:');

  // });




});
