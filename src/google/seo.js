const seo = [
  (seotitle = 'V for Vendetta web template'),
  (seodesc =
    'Free download source code full V for Vendetta website theme template with LIT element'),
  (seocover = 'https://axcora.com/img/angular.png'),
  (seoicon =
    'https://i.pinimg.com/originals/89/da/7c/89da7c4877b5f967d7ca95f76549f7ff.jpg'),
];
document.write(`
<title>${seotitle}</title>
<meta content='${seotitle}' property='og:title'/>
<meta content='${seotitle}' property='og:site_name'/>
<meta content='${seotitle}' name='facebook:title'/>
<meta content='${seotitle} ' name='twitter:title'/>
<meta content='${seodesc}' name='description'/>
<meta content='${seodesc}' name='twitter:description'/>
<meta content='${seodesc}' name='facebook:description'/>
<meta content='website' property='og:type'/>
<meta content='https://www.facebook.com/mesinkasircomplete' property='facebook:author'/>
<meta content='${seoicon}' name='facebook:image'/>
<meta content='summary_large_image' name='twitter:card'/>
<meta content='https://twitter.com/hockeycomp' property='twitter:author'/>
<meta content='@hockeycomp' name='twitter:site'/>
<meta content='https://axcora.com' property='og:author'/>
<meta content='${seoicon}' name='twitter:image'/>
<link rel="icon" type="image/x-icon" href="${seoicon}" />
`);