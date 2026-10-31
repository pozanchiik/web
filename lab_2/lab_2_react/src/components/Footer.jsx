import { useState, useEffect } from 'react';

function Footer() {
    const [os, setOs] = useState('');
    const [browser, setBrowser] = useState('');

    useEffect(() => {
        const currentOs = navigator.platform;
        const currentBrowser = navigator.userAgent;

        localStorage.setItem('os', currentOs);
        localStorage.setItem('browser', currentBrowser);

        setOs(localStorage.getItem('os'));
        setBrowser(localStorage.getItem('browser'));
    }, []); 

    return (
        <footer className="text-lime-100 col-span-4 p-4 text-center text-slate-300 rounded-lg bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600">
            <div className="mt-2 text-sm">
                <p>ОС: {os}</p>
                <p>Браузер: {browser}</p>
            <p>&copy; 2026 Maksym Baranovskyi.</p>
            </div>
        </footer>
    );
}

export default Footer;