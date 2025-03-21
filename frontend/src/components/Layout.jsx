import React from 'react';
import Footer from './Footer'; // Ajuste o caminho conforme necessário
import Header from './Header'; // Ajuste o caminho conforme necessário

const Layout = ({ children, className }) => {
    return (
        <div className={`flex flex-col min-h-screen ${className}`}>
            <Header/>
            <main className="flex-grow bg-light_gray_3">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;