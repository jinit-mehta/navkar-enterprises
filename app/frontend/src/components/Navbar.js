import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomeTop = location.pathname === '/' && !isScrolled;

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'backdrop-blur-xl bg-black/60 dark:bg-black/60 border-b border-white/10'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              data-testid="navbar-logo"
              className="flex items-center"
            >
              <img
                src="/images/logo.webp"
                alt="Navkar Enterprises"
                className={`h-24 md:h-28 w-auto object-contain rounded-lg transition-all ${
                  isHomeTop 
                    ? 'brightness-0 invert' 
                    : 'mix-blend-multiply dark:mix-blend-normal'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  className={`relative text-sm font-medium tracking-wide group ${
                      isHomeTop
                        ? (location.pathname === link.path ? 'text-white font-semibold' : 'text-white/80 hover:text-white')
                        : (location.pathname === link.path ? 'text-primary' : 'text-foreground/80 hover:text-foreground')
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isHomeTop ? 'bg-white' : 'bg-primary'
                      } ${location.pathname === link.path
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                data-testid="theme-toggle-button"
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isHomeTop ? 'bg-white/20 hover:bg-white/30' : 'bg-card hover:bg-accent/10'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className={`w-5 h-5 ${isHomeTop ? 'text-white' : 'text-primary'}`} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className={`w-5 h-5 ${isHomeTop ? 'text-white' : 'text-primary'}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Button */}
              <button
                data-testid="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-full transition-colors ${
                  isHomeTop ? 'bg-white/20 hover:bg-white/30' : 'bg-card hover:bg-accent/10'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className={`w-6 h-6 ${isHomeTop ? 'text-white' : 'text-foreground'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isHomeTop ? 'text-white' : 'text-foreground'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;