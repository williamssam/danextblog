import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/* All the metatags go in here. */}
                </Head>
                <Main>
                    <NextScript />
                </Main>
            </Html>
        )
    }
}

export default MyDocument