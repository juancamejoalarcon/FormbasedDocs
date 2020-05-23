import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';


@Injectable()
export class MetaService {

  defaultKeywords: string = 'automatikDocs, contratos';
  defaultTitle: string = 'Automatik Docs';

  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private doc
  ) { }

  addTags(page: string, opt: any) {
    this.createDefaultTags();
    switch (page) {
      case 'search' || 'auth':
        this.createSearchTags();
        break;
      case 'contact':
        this.createContactTags();
        break;
      case 'certifiedForms':
        this.createCertifiedForms(opt);
        break;
      case 'modelos':
        this.createModelTags(opt);
        break;

      default:
        break;
    }
  }

  createDefaultTags() {
    this.metaTagService.addTags([
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' }
    ]);
  }

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.doc.URL : url;
    const link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', canURL);
  }

  createSearchTags() {
    this.titleService.setTitle(this.defaultTitle);
    this.metaTagService.updateTag({ name: 'keywords', content: this.defaultKeywords });
  }

  createContactTags() {
    this.titleService.setTitle('Contacto | ' + this.defaultTitle);
  }

  createModelTags(opt: any) {
    opt.forEach((prop) => {
      if (prop.name === 'title') {
        this.titleService.setTitle(prop.content);
      } else if (prop.name === 'description' || prop.name === 'keywords') {
        this.metaTagService.updateTag({ name: prop.name, content: prop.content });
      } else if (prop.name === 'canonical') {
        this.setCanonicalURL(prop.href);
      }
    })
  }

  createCertifiedForms(opt: any) {
    const tags = [];
    let title = this.defaultTitle;
    let extraKeywords = this.defaultKeywords;
    let description = `Por medio de este contrato el propietario de una vivienda (persona o empresa) cede el uso de una de las habitaciones a un particular (persona o empresa) durante un tiempo determinado a cambio del pago de una renta`;

    switch (opt.req.url.split('/').pop()) {
      case 'contrato-arrendamiento-habitacion':
        title = 'Contrato de arrendamiento de habitación | ' + title;
        extraKeywords = extraKeywords + ', arrendamiento, arrendamiento de habitación, alquiler de habitación';
        description = `Por medio de este contrato el propietario de una vivienda (persona o empresa) cede el uso de una de las habitaciones a un particular (persona o empresa) durante un tiempo determinado a cambio del pago de una renta`;
        break;
      case 'contrato-arrendamiento-vivienda':
        title = 'Contrato de arrendamiento de vivienda | ' + title;
        extraKeywords = extraKeywords + ', arrendamiento, arrendamiento de vivienda, alquiler, alquiler de vivienda';
        description = `El contrato de arrendamiento de vivienda es aquel por el cual una persona, denominada arrendatario, se compromete a pagar un precio a otra, denominada arrendador, y ésta, a cambio, a proporcionar a la primera el uso de una edificación habitable cuyo destino primordial sea satisfacer las necesidades de vivienda del arrendatario.`;
        break;
      case 'contrato-arrendamiento-vivienda-vacacional':
        title = 'Contrato de arrendamiento de vivienda para uso turístico o vacacional | ' + title;
        extraKeywords = extraKeywords + ', arrendamiento, arrendamiento de vivienda uso turístico, alquiler, alquiler de vivienda uso turístico, alquiler de vivienda uso vacacional, alquiler vacacional';
        description = `El contrato de arrendamiento de vivienda para uso turístico o vacacional es aquel por el cual una persona, denominada arrendatario, se compromete a pagar un precio a otra, denominada arrendador, y ésta, a cambio, a proporcionar a la primera el uso de una edificación habitable cuyo destino primordial sea satisfacer las necesidades de vivienda del arrendatario que le dará un uso vacacional, de ocio, turismo o similares.`;
        break;
      case 'contrato-arrendamiento-plaza-garaje':
        title = 'Contrato de alquiler de plaza de garaje | ' + title;
        extraKeywords = extraKeywords + ', arrendamiento, arrendamiento de garaje, alquiler, alquiler de garaje, alquiler garaje, garaje';
        description = `El contrato de alquiler de plaza de garaje es aquel contrato mediante el cual el propietario cederá el uso del espacio habilitado para aparcar un vehículo, ya sea coche o moto, de manera permanente al arrendatario.`;
        break;
      case 'contrato-compraventa-inmueble':
        title = 'Contrato de compraventa de bien inmueble | ' + title;
        extraKeywords = extraKeywords + ', contrato compraventa bien inmueble, compraventa bien inmueble, compraventa vivienda';
        description = `El contrato de compraventa de bien inmueble es el documento por el que el vendedor se compromete a entregar el inmueble al comprador a cambio del precio acordado.`;
        break;
      case 'contrato-compraventa-vehiculo':
        title = 'Contrato de compraventa de vehículo usado entre particulares | ' + title;
        extraKeywords = extraKeywords + ', contrato compraventa vehículo usado entre particulares, compraventa vehículo usado';
        description = `Por medio de este contrato un particular (persona o empresa) propietario de un vehículo automóvil usado, puede venderlo a otro.`;
        break;
      default:
        break;
    }

    this.titleService.setTitle(title);
    this.metaTagService.updateTag({ name: 'keywords', content: extraKeywords });
    this.metaTagService.updateTag({ name: 'description', content: description });
    return tags;
  }

  createHeaderLinks(links: string[]) {
    links.forEach((link: string) => {
      const linkElement: HTMLLinkElement = this.doc.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('href', environment.api_url + link);
      document.head.appendChild(linkElement);
    });
  }
}
