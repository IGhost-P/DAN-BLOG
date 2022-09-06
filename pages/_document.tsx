import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="yeummy-blog" />
          <meta property="og:title" content="염상권 블로그" />
          <meta
            property="og:description"
            content="매일 성장하는 개발자입니다."
          />
          <meta property="og:image" content="https://i.imgur.com/T42Fusk.jpg" />
          <meta property="og:url" content="https:yeummy-blog.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>
        </Head>
        <body>
          <div id="portal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
