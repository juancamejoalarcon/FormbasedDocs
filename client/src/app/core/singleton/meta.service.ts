import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Injectable()
export class MetaService {

    defaultKeywords: string = 'automatikDocs, contratos';
    defaultTitle: string = 'Automatik Docs';
    
  constructor(
    private metaTagService: Meta,
    private titleService: Title
  ) { }

  addTags(page: string, opt: any) {
      this.createDefaultTags();
      switch (page) {
          case 'search' || 'auth':
              this.createSearchTags();
              break;
          case 'certifiedForms':
              this.createCertifiedForms(opt);
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

  createSearchTags() {
    this.titleService.setTitle(this.defaultTitle);
    this.metaTagService.updateTag({name: 'keywords', content: this.defaultKeywords});
  }

  createCertifiedForms(opt: any) {
    let tags = [];
    let title = this.defaultTitle;
    let extraKeywords = this.defaultKeywords;
    let description = `Por medio de este contrato el propietario de una vivienda (persona o empresa) cede el uso de una de las habitaciones a un particular (persona o empresa) durante un tiempo determinado a cambio del pago de una renta`;

    switch (opt.req.url.split('/').pop()) {
        case 'contrato-arrendamiento-habitacion':
                title = 'Contrato de arrendamiento de habitación | ' + title;
                extraKeywords = extraKeywords + ', arrendamiento, arrendamiento de habitación, alquiler de habitación';
            break;
    
        default:
            break;
    }

    this.titleService.setTitle(title);
    this.metaTagService.updateTag({name: 'keywords', content: extraKeywords});
    this.metaTagService.updateTag({name: 'description', content: description});
    return tags;
  }
}