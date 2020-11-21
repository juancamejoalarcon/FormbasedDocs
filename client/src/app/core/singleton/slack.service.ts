import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    constructor(private http: HttpClient) { }

    initedCheckout(formTitle: String, steps: any): void {

        const message = {
            channel: '#general',
            text: formTitle,
            attachments: [
                {
                    author_name: window.location.href,
                    color: '#556270',
                    title: 'Proceso de checkout iniciado',
                    pretext: `Formulario: ${formTitle}`,
                    text: JSON.stringify(steps)
                }
            ]
        }
        if (window.location.href.includes('automatikdocs.com')) this.http.post(this.webHook, message, this.options).subscribe(() => { });
    }
}
