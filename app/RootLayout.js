import { inter } from "./layout";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
