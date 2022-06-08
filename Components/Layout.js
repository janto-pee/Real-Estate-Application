import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
            </Head>
            <Box className='Layout'>
                <header className='headerBg'>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
}

export default Layout;