import { Directive, HostBinding, Input } from '@angular/core';
import { CommonsService } from '../../core';

@Directive({
    selector: 'a[href]',
})
export class ExternalLinkDirective {
    @HostBinding('attr.rel') relAttr = '';
    @HostBinding('attr.target') targetAttr = '';
    @HostBinding('attr.href') hrefAttr = '';
    @Input() href: string;

    constructor(
        private commonsService: CommonsService
    ) { }

    ngOnChanges() {
        this.hrefAttr = this.href;

        if (this.isLinkExternal()) {
            // https://developers.google.com/web/tools/lighthouse/audits/noopener
            this.relAttr = 'noopener';
            this.targetAttr = '_blank';
        }
    }

    private isLinkExternal() {
        return this.commonsService.isBrowser() && !this.href.includes(location.hostname);
    }
}