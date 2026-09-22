import { useState, useEffect } from 'react';
import { PageId } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { LogofolioPage } from './pages/LogofolioPage';
import { CommercialGraphicsPage } from './pages/CommercialGraphicsPage';
import { EditorialPage } from './pages/EditorialPage';
import { Interior3DPage } from './pages/Interior3DPage';
import { UIUXPage } from './pages/UIUXPage';
import { DecorPage } from './pages/DecorPage';
import { ContactsPage } from './pages/ContactsPage';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navPages: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Про мене' },
    { id: 'resume', label: 'Резюме' },
    { id: 'logofolio', label: 'Логофоліо' },
    { id: 'commercial', label: 'Комерційна графіка' },
    { id: 'editorial', label: 'Видання' },
    { id: 'interior3d', label: '3D та Інтер’єр' },
    { id: 'uiux', label: 'UI/UX Дизайн' },
    { id: 'decor', label: 'Декорація закладів' },
    { id: 'contacts', label: 'Контакти' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--app-surface)] text-[var(--app-text)] transition-colors duration-200">
      {/* Minimal Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDark={isDark}
        onToggleDark={() => setIsDark(!isDark)}
      />

      {/* Main Content: Selected Page */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'resume' && <ResumePage />}
        {currentPage === 'logofolio' && <LogofolioPage onNavigate={setCurrentPage} />}
        {currentPage === 'commercial' && <CommercialGraphicsPage onNavigate={setCurrentPage} />}
        {currentPage === 'editorial' && <EditorialPage onNavigate={setCurrentPage} />}
        {currentPage === 'interior3d' && <Interior3DPage onNavigate={setCurrentPage} />}
        {currentPage === 'uiux' && <UIUXPage onNavigate={setCurrentPage} />}
        {currentPage === 'decor' && <DecorPage onNavigate={setCurrentPage} />}
        {currentPage === 'contacts' && <ContactsPage onNavigate={setCurrentPage} />}
      </main>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-2.5 rounded-full bg-[var(--app-surface-card)] text-[var(--app-text)] border border-[var(--app-border)] shadow-md hover:border-[var(--app-accent)] transition-all z-30"
        title="Вгору"
        aria-label="Вгору"
      >
        <ArrowUp className="w-4 h-4 opacity-70" />
      </button>

      {/* Clean Designer Business Card Footer */}
      <footer className="w-full border-t border-[var(--app-border)] bg-[var(--app-surface)] py-12 transition-colors">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-base font-bold text-[var(--app-text)] block">
                {PERSONAL_INFO.fullName}
              </span>
              <p className="text-xs text-[var(--app-muted)]">
                {PERSONAL_INFO.tagline} • {PERSONAL_INFO.location}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 text-[var(--app-muted)] hover:text-[var(--app-accent)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> {PERSONAL_INFO.phone}
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-[var(--app-muted)] hover:text-[var(--app-accent)] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Quick page directory in footer */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-[var(--app-border)] text-xs">
            {navPages.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentPage(p.id);
                  scrollToTop();
                }}
                className={`transition-colors ${
                  currentPage === p.id
                    ? 'text-[var(--app-accent)] font-bold'
                    : 'text-[var(--app-muted)] hover:text-[var(--app-text)]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-[var(--app-muted)] opacity-70">
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName} • Сайт-візитівка дизайнера за референсом портфоліо
          </div>
        </div>
      </footer>
    </div>
  );
}
