
import  Head from 'next/head';
import Navigation from '../Navigation/Navigation';

export default function MainLayout({children,title}){
    return(
        <>
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation/>
        <main>{children}</main>
        </>
    )
}
