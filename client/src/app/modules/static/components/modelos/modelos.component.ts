import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';
import { MetaService, CommonsService } from '../../../../core';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html'
})
export class ModelosComponent implements OnInit {

  contractImageSrc: string;
  title: string;
  updated: string;
  blogContent: string;
  id: string;
  jsonLD: SafeHtml;
  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService,
    private commonsService: CommonsService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.contractImageSrc = data.form.image;
      this.title = data.form.title;
      this.updated = data.form.updated;
      this.blogContent = data.form.blog;
      this.id = data.form.id;
      this.setMetaService(data.form.meta.tags);
      console.log(data.form.meta.ldJson);
      this.jsonLD = this.commonsService.getSafeHTML(data.form.meta.ldJson);
    });
  }

  setMetaService(meta: any) {
    this.metaService.addTags('modelos', meta);
  }

}
