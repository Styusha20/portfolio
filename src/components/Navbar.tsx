import { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ArrowUpRight, 
  ChevronDown, 
  Box, 
  Layout, 
  Palette, 
  Image, 
  BookOpen, 
  Sparkles,
  User,
  FileText,
  Mail
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isDark: boolean;
  onToggleDark: () => void;
}

interface PortfolioCategory {
  id: PageId;
  label: string;
  shortLabel: string;
  desc: string;
  icon: typeof Box;
  number: string;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'interior3d',
    label: '3D & Інтер’єр',
    shortLabel: '3D & Інтер’єр',
    desc: 'Архітектурна візуалізація, об’ємне моделювання',
    icon: Box,
    number: '01',
  },
  {
    id: 'uiux',
    label: 'UI/UX Дизайн',
    shortLabel: 'UI/UX',
    desc: 'Проєктування цифрових продуктів та систем',
    icon: Layout,
    number: '02',
  },
  {
    id: 'logofolio',
    label: 'Логофоліо',
    shortLabel: 'Логотипи',
    desc: 'Айдентика, товарні знаки та фірмовий стиль',
    icon: Palette,
    number: '03',
  },
  {
    id: 'commercial',
    label: 'Комерційна графіка',
    shortLabel: 'Графіка',
    desc: 'Digital-креативи, банери та зовнішня реклама',
    icon: Image,
    number: '04',
  },
  {
    id: 'editorial',
    label: 'Видання та поліграфія',
    shortLabel: 'Видання',
    desc: 'Каталоги, брендбуки, препрес та верстка',
    icon: BookOpen,
    number: '05',
  },
  {
    id: 'decor',
    label: 'Декорація закладів',
    shortLabel: 'Декорація',
    desc: 'Сезонні фотозони та концептуальне оформлення',
    icon: Sparkles,
    number: '06',
  },
];

export function Navbar({ currentPage, onNavigate, isDark, onToggleDark }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isPortfolioPage = PORTFOLIO_CATEGORIES.some((cat) => cat.id === currentPage);
  const currentCategory = PORTFOLIO_CATEGORIES.find((cat) => cat.id === currentPage);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectPage = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--app-surface)]/90 backdrop-blur-md border-b border-[var(--app-border)] transition-colors duration-200">
      {/* Main Bar */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left: Designer Monogram & Title */}
        <button
          onClick={() => handleSelectPage('home')}
          className="text-left group flex items-center gap-3 focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] flex items-center justify-center font-bold text-xs tracking-tight shadow-sm transition-transform group-hover:scale-105">
            АН
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="block text-sm sm:text-base font-bold tracking-tight text-[var(--app-text)] group-hover:text-[var(--app-accent)] transition-colors">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold rounded-md bg-[var(--app-accent-subtle)] text-[var(--app-accent)]">
                Portfolio
              </span>
            </div>
            <span className="block text-[11px] text-[var(--app-muted)] font-medium">
              3D-художниця & Графічна дизайнерка
            </span>
          </div>
        </button>

        {/* Center: Structured Desktop Navigation (4 main items) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[var(--app-surface-card)] border border-[var(--app-border)] shadow-xs">
          {/* 1. Home / About */}
          <button
            onClick={() => handleSelectPage('home')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              currentPage === 'home'
                ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] shadow-xs'
                : 'text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
            }`}
          >
            <User className="w-3.5 h-3.5 opacity-70" />
            <span>Про мене</span>
          </button>

          {/* 2. Portfolio Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isPortfolioPage
                  ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] shadow-xs'
                  : 'text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
              }`}
            >
              <Layout className="w-3.5 h-3.5 opacity-70" />
              <span>Портфоліо</span>
              {isPortfolioPage && currentCategory && (
                <span className="hidden lg:inline-block px-1.5 py-0.2 rounded-full text-[10px] bg-black/15 font-mono">
                  {currentCategory.shortLabel}
                </span>
              )}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[520px] p-3 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] shadow-2xl shadow-black/25 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between px-2.5 pb-2 mb-2 border-b border-[var(--app-border)] text-[11px] font-bold uppercase tracking-wider text-[var(--app-muted)]">
                  <span>Розділи портфоліо</span>
                  <span className="font-mono text-[10px]">6 категорій</span>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {PORTFOLIO_CATEGORIES.map((cat) => {
                    const IconComponent = cat.icon;
                    const isActive = currentPage === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleSelectPage(cat.id)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl text-left transition-all group ${
                          isActive
                            ? 'bg-[var(--app-accent-subtle)] border border-[var(--app-accent)]/30'
                            : 'hover:bg-[var(--app-surface-hover)] border border-transparent'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)]'
                              : 'bg-[var(--app-surface)] text-[var(--app-muted)] group-hover:text-[var(--app-accent)]'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span
                            className={`block text-xs font-bold truncate ${
                              isActive ? 'text-[var(--app-accent)]' : 'text-[var(--app-text)]'
                            }`}
                          >
                            {cat.label}
                          </span>
                          <span className="block text-[11px] text-[var(--app-muted)] line-clamp-1 leading-snug">
                            {cat.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 3. Resume */}
          <button
            onClick={() => handleSelectPage('resume')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              currentPage === 'resume'
                ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] shadow-xs'
                : 'text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
            }`}
          >
            <FileText className="w-3.5 h-3.5 opacity-70" />
            <span>Резюме</span>
          </button>

          {/* 4. Contacts */}
          <button
            onClick={() => handleSelectPage('contacts')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              currentPage === 'contacts'
                ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] shadow-xs'
                : 'text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
            }`}
          >
            <Mail className="w-3.5 h-3.5 opacity-70" />
            <span>Контакти</span>
          </button>
        </nav>

        {/* Right: Theme Toggle & Quick Action CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onToggleDark}
            className="p-2 rounded-xl text-[var(--app-text-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)] border border-transparent hover:border-[var(--app-border)] transition-all"
            title={isDark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => handleSelectPage('contacts')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            <span>Написати</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[var(--app-text)] hover:bg-[var(--app-surface-hover)] border border-[var(--app-border)] transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Secondary Sub-navigation Bar: Shown only when browsing Portfolio sections */}
      {isPortfolioPage && (
        <div className="border-t border-[var(--app-border)] bg-[var(--app-surface-card)]/70 backdrop-blur-sm transition-colors">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--app-muted)] pr-2 shrink-0 hidden sm:inline-block">
              Напрямки:
            </span>
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = currentPage === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectPage(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                    isActive
                      ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] shadow-xs'
                      : 'text-[var(--app-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-18 bg-[var(--app-surface)] border-b border-[var(--app-border)] shadow-2xl p-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-md mx-auto space-y-4">
            {/* Primary Main Pages */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--app-muted)] px-3 block">
                Головне меню
              </span>
              <button
                onClick={() => handleSelectPage('home')}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'home'
                    ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)]'
                    : 'text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 opacity-70" />
                  <span>Про мене</span>
                </div>
                <span className="text-xs font-mono opacity-50">01</span>
              </button>

              <button
                onClick={() => handleSelectPage('resume')}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'resume'
                    ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)]'
                    : 'text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 opacity-70" />
                  <span>Резюме</span>
                </div>
                <span className="text-xs font-mono opacity-50">02</span>
              </button>

              <button
                onClick={() => handleSelectPage('contacts')}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'contacts'
                    ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)]'
                    : 'text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 opacity-70" />
                  <span>Контакти</span>
                </div>
                <span className="text-xs font-mono opacity-50">03</span>
              </button>
            </div>

            {/* Portfolio Subcategories */}
            <div className="pt-3 border-t border-[var(--app-border)] space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--app-muted)] px-3 block">
                Розділи портфоліо (6)
              </span>
              {PORTFOLIO_CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = currentPage === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectPage(cat.id)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--app-accent)] text-[var(--app-accent-fg,#fff)] font-semibold'
                        : 'text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 opacity-70" />
                      <span>{cat.label}</span>
                    </div>
                    <span className={`text-xs font-mono opacity-50 ${isActive ? 'text-[var(--app-accent-fg,#fff)]' : ''}`}>
                      {cat.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
