# [Automatik Docs](https://www.automatikdocs.com/)

<p align="center">
  <img src="https://www.automatikdocs.com/assets/images/logo.png"  alt="Logo"/>
</p>
<p>
    The purpose of the page is the automatic creation of documents by filling forms. As the user fills a form, a legal doc is created in real time as it can be seen in the example below:
</p>
<br/>
<kbd>
    <img src="./server/readme.gif"  alt="Logo"/>
</kbd>
<br/>
<br/>
<p>In order to optimize the SEO of the page I used Server Side Rendering with <strong>Angular Universal</strong>.</p>
<p>The backend is quite simple, an <strong>Express</strong> API using <strong>Mongo DB</strong> with a passport strategy for authentication.</p>
<p>I created a series of e2e tests with <strong>Cypress</strong> to be launched in <strong>Github Actions</strong> once every day and every time I push a commit.</p>
<p>I deployed the webapp in Heroku.</p>
<p>The live version can be found here <a href="https://www.automatikdocs.com/" target="_blank">https://www.automatikdocs.com/</a></p>