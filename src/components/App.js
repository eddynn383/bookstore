import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthProvider'
import Header from './header/Header'

import Banner from './banner/Banner'
import bannerPath from '../images/banner.jpg'
// import WelcomeMessage from './WelcomeMessage'
// import SearchBar from './SearchBar'

import Content from './content/Content'

// import Footer from './Footer'
// import QuickLinks from './QuickLinks'
// import Credits from './Credits'



function App() {
    const styles = {
        backgroundImage: `url(${bannerPath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="layout vh-100">
            <Router>
                <AuthProvider>
                    <section className="header">
                        <Header />
                    </section>
                    <section className="banner" style={styles}>
                        <Banner />
                    </section>
                    <section className="content">
                        <Content />
                    </section>
                    <section className="footer">
                        {/* <Footer /> */}
                    </section>
                    {/* <Footer>
                        <Container>
                            <QuickLinks />
                            <Credits />
                        </Container>
                    </Footer> */}
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
