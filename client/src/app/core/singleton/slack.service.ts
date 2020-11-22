import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheckoutService } from '../http/checkout.service'

@Injectable()
export class SlackService {

    private webHook = 'https://hooks.slack.com/services/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';
    private headers = new HttpHeaders(
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/x-www-form-urlencoded'
        }
    )
    private options = {
        headers: this.headers,
    };

    constructor(
        private http: HttpClient,
        private checkoutService: CheckoutService) { }

    initedCheckout(formTitle: String, steps: any): void {
        var currentdate = new Date();
        var datetime = `${currentdate.getDate()}-${currentdate.getMonth() + 1}-${currentdate.getFullYear()}_${currentdate.getHours()}-${currentdate.getMinutes()}-${currentdate.getSeconds()}`;
        const name: string = `${formTitle}-${datetime}`

        const message = {
            channel: '#checkouts-iniciados',
            text: formTitle,
            attachments: [
                {
                    author_name: window.location.href,
                    color: '#556270',
                    title: 'Proceso de checkout iniciado',
                    text: `Id_formulario: ${name}`,
                }
            ]
        }
        if (window.location.href.includes('automatikdocs.com')) this.http.post(this.webHook, message, this.options).subscribe(() => { });
        this.checkoutService.checkoutInitedAws(steps, name).subscribe((data: any) => { });
    }
}
