function Header(){
    return(
    <header className="p-4 rounded-lg bg-gradient-to-b from-slate-100 to-white border border-gray-200 dark:from-slate-800 dark:to-slate-700 dark:border-slate-600 shadow-smcol-span-4 col-span-4 p-4 rounded-lg bg-gradient-to-b from-slate-100 to-white border border-gray-200 shadow-sm dark:from-slate-800 dark:to-slate-700 dark:border-slate-600 text-center">
        <h1 className="text-green-400">Maksym Baranovskyi</h1>
        <address className="text-amber-300">
            <p className="hover:text-pink-500"><strong>Email:</strong> <a href="mailto:maksym.baranovskyi.kb.2025@lpnu.ua">maksym.baranovskyi.kb.2025@lpnu.ua</a></p>
            <p className="hover:text-pink-500"><strong>GitHub:</strong> <a href="https://github.com/pozanchiik" target="_blank">github.com/pozanchiik</a></p>
            <p>Lviv, Ukraine</p>
        </address>
    </header>
    );
}
export default Header;