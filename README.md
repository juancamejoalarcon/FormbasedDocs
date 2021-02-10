# [Automatik Docs](https://www.automatikdocs.com/)

<p align="center">
  <img src="https://www.automatikdocs.com/assets/images/logo.png"  alt="Logo"/>
</p>

The purpose of the page is the automatic creation of documents by filling forms.

<img src="./server/readme.gif"  alt="Logo"/>

<p>In order to optimize the SEO of the page I used Server Side Rendering with <u>Angular Universal</u>.</p>
<p>The backend is quite simple, an <u>Express</u> API using <u>Mongo DB</u> with a passport strategy for authentication.</p>
<p>I created a series of e2e tests with <u>Cypress</u> to be launched in <u>Github Actions</u> once every day and every time I push a commit.</p>