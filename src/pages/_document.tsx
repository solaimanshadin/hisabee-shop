
import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';


type Props = DocumentProps & {
    // add custom props here
};

export default class MyDocument extends Document<Props> {
    render() {
        return (
            <Html>
                <Head>
                    <title>Hisabee Shop</title>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}