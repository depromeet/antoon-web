<<<<<<< HEAD:pages/_document.tsx
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
=======
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MainDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head/>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MainDocument;
>>>>>>> 3526832 (:fire:[feature] Add ChartComponent):src/pages/_document.tsx
