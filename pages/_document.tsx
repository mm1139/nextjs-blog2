import Documents, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Documents {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
        </body>
      </Html>
    )
  }
}
