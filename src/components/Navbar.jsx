import { useState } from 'react';

const Navbar = () => {
    // State to toggle mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle smooth scroll to sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/70 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                {/* Logo */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
                    <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Eniola Ibiwoye
                        <span className="text-blue-600 dark:text-blue-400">.</span>
                    </span>
                </a>

                {/* Mobile Menu Button - Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 transition-colors"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Navbar Links */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-white/50 md:bg-transparent dark:bg-slate-900/50 md:dark:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-slate-700">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="block py-2 px-3 w-full text-left md:w-auto rounded-md text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 md:hover:bg-transparent dark:hover:bg-slate-800 md:dark:hover:bg-transparent transition-all"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
