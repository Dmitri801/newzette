import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content="#28ad8c" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="Web Development Portfolio Site" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/flatly/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Permanent+Marker"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
            crossOrigin="anonymous"
          />
          <title>Newzette</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
