# [Automatik Docs](https://www.automatikdocs.com/)

<img src="https://www.automatikdocs.com/assets/images/logo.png"  alt="Logo"/>

The purpose of the page is the automatic creation of documents by filling forms.

<img src="./server/readme.gif"  alt="Logo"/>

In order to optimize the SEO of the page I used Server Side Rendering with <u> Angular Universal</u>.
The backend is quite simple, an <u>Express</u> API using <u>Mongo DB</u> with a passport strategy for authentication.

I created a series of e2e tests with <u>Cypress</u> to be launched in Github Actions once every day and every time I push a commit.