import { useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface LogofolioPageProps {
  onNavigate: (page: PageId) => void;
}

export function LogofolioPage({ onNavigate }: LogofolioPageProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('origins');

  const logos = [
    {
      id: 'origins',
      name: 'ORIGINS',
      category: 'Lifestyle & Архітектура',
      concept: 'Геометричний баланс монументальної арки та сонця. Лаконічна преміальна естетика.',
      color: '#2C3E50',
      accent: '#E0A96D',
      spec: 'Моноширинний гротеск, адаптація під фасадні вивіски та сліпе тиснення на папері.',
    },
    {
      id: 'kolibri',
      name: 'Колібрі',
      category: 'Арт-студія & Майстерня',
      concept: 'Полігональна геометрія птаха у динамічному польоті, що уособлює легкість творчості.',
      color: '#0284C7',
      accent: '#F43F5E',
      spec: 'Гармонійна палітра чистих спектральних відтінків для дитячих та дорослих художніх груп.',
    },
    {
      id: 'posmos',
      name: 'POSMOS',
      category: 'Креативна агенція',
      concept: 'Мінімалістична орбіта планети з вивіреною типографікою, орієнтована на технологічний сектор.',
      color: '#1E1B4B',
      accent: '#818CF8',
      spec: 'Широкі внутрішньолітерні просвіти та висока читабельність у малих фавіконах.',
    },
    {
      id: 'magicwood',
      name: 'Magic Wood',
      category: 'Деревообробка & Меблі',
      concept: 'Органічний силует дерева, інтегрований у річні кільця деревини.',
      color: '#365314',
      accent: '#A3E635',
      spec: 'Адаптація під лазерне гравіювання та випалювання на масиві дуба й ясеня.',
    },
    {
      id: 'mochi',
      name: 'MOCHI',
      category: 'Японські десерти',
      concept: 'М’які округлі форми літер, що викликають тактильну асоціацію з ніжним рисовим тістом.',
      color: '#831843',
      accent: '#F472B6',
      spec: 'Пастельна кондитерська кольорова гама для брендування стаканчиків та крафтових коробок.',
    },
    {
      id: 'yumio',
      name: 'Yumio',
      category: 'Artisan Confectionery',
      concept: 'Живий каліграфічний розчерк з акцентною іскрою смаку для інтернет-магазину десертів.',
      color: '#7C2D12',
      accent: '#FB923C',
      spec: 'Динамічний знак, оптимізований під мобільні додатки, стікери та друк на шоперах.',
    },
  ];

  const activeLogo = logos.find((l) => l.id === selectedBrand) || logos[0];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-[var(--app-border)] pb-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)]">
            СТОРІНКА 03 • IDENTITY & BRANDING
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Дата: 2021 — дотепер
          </span>
        </div>

        <span className="text-xs font-mono font-semibold uppercase text-[var(--app-accent)] block">
          Від ідеї до відбитку
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] uppercase">
          ЛОГОФОЛІО
        </h1>

        <p className="text-sm sm:text-base text-[var(--app-muted)] leading-relaxed pt-2 max-w-3xl">
          Мій досвід розробки логотипів охоплює широку палітру сфер: від творчих арт-студій та центрів краси до ветеринарних клінік і дитячих закладів. Я створюю візуальні рішення для онлайн-магазинів та локальних стартапів, допомагаючи кожному бізнесу знайти своє унікальне обличчя.
        </p>
      </div>

      {/* Master Logofolio Presentation Board */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--app-accent)] font-mono">
            ГОЛОВНИЙ ПЛАНШЕТ • LOGOFOLIO SHOWCASE
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Adobe Illustrator CC • Vector Graphics
          </span>
        </div>

        <div className="rounded-3xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-xl group">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
            <img
              src="/extracted/img_84.jpg"
              alt="Logofolio Master Showcase"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/75 backdrop-blur-xs text-white border border-white/20">
              Оригінальний планшет логотипів
            </div>
          </div>
          <div className="p-4 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-[var(--app-text)] font-semibold">
              Збірка авторських товарних знаків: Колібрі, ORIGINS, POSMOS, Magic Wood, MOCHI, Yumio
            </span>
            <span className="font-mono text-[var(--app-muted)] text-[11px]">Векторна графіка • Айдентика</span>
          </div>
        </div>
      </section>

      {/* Grid of Logos from PDF */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--app-accent)]">
            Оберіть бренд для детального опису концепції:
          </span>
          <span className="text-xs text-[var(--app-muted)]">
            6 ключових брендів
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* 1. ORIGINS */}
          <div
            onClick={() => setSelectedBrand('origins')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all flex flex-col items-center justify-center min-h-[160px] text-center ${
              selectedBrand === 'origins'
                ? 'bg-neutral-900 text-white border-neutral-700 shadow-md ring-2 ring-[var(--app-accent)]'
                : 'bg-neutral-900/90 text-white/90 border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="mb-2">
              <circle cx="50" cy="50" r="42" stroke="#E0A96D" strokeWidth="3" strokeDasharray="6 4" />
              <path d="M50 16 A34 34 0 0 1 50 84 A34 34 0 0 0 50 16" fill="#E0A96D" opacity="0.8" />
              <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
            </svg>
            <span className="font-extrabold tracking-[0.25em] text-sm font-mono">ORIGINS</span>
            <span className="text-[10px] text-amber-200/80 mt-1 uppercase">Living Studio</span>
          </div>

          {/* 2. КОЛІБРІ */}
          <div
            onClick={() => setSelectedBrand('kolibri')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all flex flex-col items-center justify-center min-h-[160px] text-center ${
              selectedBrand === 'kolibri'
                ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-400 shadow-md ring-2 ring-[var(--app-accent)]'
                : 'bg-[var(--app-surface-card)] border-[var(--app-border)] hover:border-[var(--app-accent)]'
            }`}
          >
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="mb-2">
              <path d="M20 65 L45 35 L75 25 L65 50 L45 60 Z" fill="#0284C7" />
              <path d="M45 35 L65 15 L75 25 Z" fill="#F43F5E" />
              <path d="M45 60 L60 85 L65 50 Z" fill="#10B981" />
              <path d="M75 25 L92 20 L72 32 Z" fill="#F59E0B" />
              <circle cx="68" cy="27" r="2.5" fill="#FFFFFF" />
            </svg>
            <span className="font-bold text-sm tracking-wide text-[var(--app-text)]">Колібрі</span>
            <span className="text-[10px] text-sky-600 dark:text-sky-300 font-medium">Арт-студія</span>
          </div>

          {/* 3. POSMOS */}
          <div
            onClick={() => setSelectedBrand('posmos')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all flex flex-col items-center justify-center min-h-[160px] text-center ${
              selectedBrand === 'posmos'
                ? 'bg-slate-900 text-white border-indigo-500 shadow-md ring-2 ring-[var(--app-accent)]'
                : 'bg-slate-900/90 text-white/90 border-slate-800 hover:border-slate-700'
            }`}
          >
            <svg width="52" height="40" viewBox="0 0 120 70" fill="none" className="mb-2">
              <ellipse cx="60" cy="35" rx="50" ry="18" stroke="#818CF8" strokeWidth="2.5" transform="rotate(-15 60 35)" />
              <circle cx="60" cy="35" r="14" fill="#6366F1" />
              <circle cx="85" cy="20" r="4" fill="#38BDF8" />
            </svg>
            <span className="font-black text-sm tracking-[0.2em] text-white">POSMOS</span>
            <span className="text-[10px] text-indigo-300 mt-1 uppercase">Creative Agency</span>
          </div>

          {/* 4. MAGIC WOOD */}
          <div
            onClick={() => setSelectedBrand('magicwood')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all flex flex-col items-center justify-center min-h-[160px] text-center ${
              selectedBrand === 'magicwood'
                ? 'bg-[#1e2615] text-white border-lime-700 shadow-md ring-2 ring-[var(--app-accent)]'
                : 'bg-[#1e2615]/90 text-white/90 border-[#2b351e] hover:border-lime-700'
            }`}
          >
            <svg width="44" height="44" viewBox="0 0 100 100" fill="none" className="mb-2">
              <circle cx="50" cy="50" r="40" stroke="#84CC16" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M50 20 C60 35 70 45 65 65 C60 78 40 78 35 65 C30 45 40 35 50 20 Z" fill="#65A30D" />
              <line x1="50" y1="35" x2="50" y2="78" stroke="#ECFCCB" strokeWidth="2" />
            </svg>
            <span className="font-semibold text-xs tracking-wider text-lime-200">Magic Wood</span>
            <span className="text-[10px] text-lime-400/80 mt-0.5">Woodcraft Craft</span>
          </div>

          {/* 5. MOCHI */}
          <div
            onClick={() => setSelectedBrand('mochi')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all flex flex-col items-center justify-center min-h-[160px] text-center ${
              selectedBrand === 'mochi'
                ? 'bg-pink-50 dark:bg-pink-950/40 border-pink-400 shadow-md ring-2 ring-[var(--app-accent)]'
                : 'bg-[var(--app-surface-card)] border-[var(--app-border)] hover:border-[var(--app-accent)]'
            }`}
          >
            <div className="mb-2 flex items-center justify-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-pink-400" />
              <span className="w-4 h-4 rounded-full bg-rose-400" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-300" />
            </div>
            <span className="font-black text-sm tracking-wide text-pink-700 dark:text-pink-300">MOCHI</span>
            <span className="text-[10px] text-pink-600 dark:text-pink-400">Desserts & Sweets</span>
          </div>

          {/* 6. YUMIO */}
          <div
            onClick={() => setSelectedBrand('yumio')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all flex flex-col items-center justify-center min-h-[160px] text-center ${
              selectedBrand === 'yumio'
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 shadow-md ring-2 ring-[var(--app-accent)]'
                : 'bg-[var(--app-surface-card)] border-[var(--app-border)] hover:border-[var(--app-accent)]'
            }`}
          >
            <Sparkles className="w-6 h-6 text-amber-500 mb-2" />
            <span className="font-black text-base italic tracking-tight text-amber-800 dark:text-amber-300">Yumio.</span>
            <span className="text-[10px] text-amber-700 dark:text-amber-400">Confectionery E-shop</span>
          </div>
        </div>
      </section>

      {/* Selected Brand Detail Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--app-border)] pb-4">
          <div>
            <span className="text-xs font-bold text-[var(--app-accent)] uppercase">
              {activeLogo.category}
            </span>
            <h2 className="text-2xl font-black text-[var(--app-text)] mt-0.5">
              {activeLogo.name}
            </h2>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--app-accent-subtle)] text-[var(--app-accent)] font-semibold self-start sm:self-auto">
            Adobe Illustrator CC • Vector
          </span>
        </div>

        <div className="space-y-3 text-sm text-[var(--app-text)] leading-relaxed">
          <p>
            <strong>Концепція знаку:</strong> {activeLogo.concept}
          </p>
          <p className="opacity-80">
            <strong>Специфікація та носії:</strong> {activeLogo.spec}
          </p>
        </div>
      </section>

      {/* Bottom Navigation to Next Page */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--app-border)]">
        <button
          onClick={() => onNavigate('resume')}
          className="text-xs font-semibold text-[var(--app-muted)] hover:text-[var(--app-text)] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> До резюме
        </button>
        <button
          onClick={() => onNavigate('commercial')}
          className="text-xs font-semibold text-[var(--app-accent)] hover:underline flex items-center gap-1.5"
        >
          Далі: Комерційна графіка <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
