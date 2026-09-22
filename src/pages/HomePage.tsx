import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, MapPin, Mail, Phone, Sparkles, Award, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const portfolioSections: { id: PageId; title: string; subtitle: string; tagline: string; count: string; image: string }[] = [
    {
      id: 'logofolio',
      title: 'Логофоліо',
      subtitle: 'Айдентика, знаки та фірмовий стиль',
      tagline: 'Від ідеї до відбитку',
      count: '03',
      image: './extracted/img_84.jpg',
    },
    {
      id: 'commercial',
      title: 'Комерційна графіка',
      subtitle: 'Digital креативи, поліграфія та зовнішня реклама',
      tagline: 'Від кліку до дії',
      count: '04',
      image: './extracted/img_13.jpg',
    },
    {
      id: 'editorial',
      title: 'Багатосторінкові видання',
      subtitle: 'Каталоги, буклети, брендбуки та препрес',
      tagline: 'Від ідеї до складної верстки',
      count: '05',
      image: './extracted/img_54.jpg',
    },
    {
      id: 'interior3d',
      title: 'Інтер’єр та 3D моделювання',
      subtitle: 'Архітектурна візуалізація, приватні та відкриті простори',
      tagline: 'Від плану до візуалізації',
      count: '06',
      image: './extracted/img_2.jpg',
    },
    {
      id: 'uiux',
      title: 'UI/UX Дизайн',
      subtitle: 'Комплексне проєктування складних інтерфейсів, CJM, MedTalks, Yumio',
      tagline: 'Від прототипу до взаємодії',
      count: '07',
      image: './extracted/img_32.jpg',
    },
    {
      id: 'decor',
      title: 'Декорація комерційних закладів',
      subtitle: 'Просторові концепції, сезонні фотозони, романтичний та зимовий сезони',
      tagline: 'Від креативу до атмосфери',
      count: '08',
      image: './extracted/img_36.jpg',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-16 animate-in fade-in duration-300">
      {/* Designer Business Card Hero */}
      <section className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="md:col-span-7 space-y-6">
            {/* Category & Status pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--app-accent-subtle)] text-[var(--app-accent)]">
                Дизайнерка & 3D-художниця
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--app-muted)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--app-accent)]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-xs text-[var(--app-muted)]">
                • 2021 — дотепер
              </span>
            </div>

            {/* Hero Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] leading-[1.1]">
                Анастасія Ніколаєва
                <span className="block text-xl sm:text-2xl font-medium text-[var(--app-muted)] mt-1.5">
                  (можна просто Стюша)
                </span>
              </h1>

              <p className="text-base text-[var(--app-muted)] font-medium leading-relaxed">
                Працюю в напрямках 3D-моделювання, інтер’єрного та графічного дизайну, поєднуючи технічні навички з творчим підходом.
              </p>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('resume')}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[var(--app-accent)] text-white hover:opacity-90 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Переглянути Резюме</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contacts')}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[var(--app-surface-card)] text-[var(--app-text)] border border-[var(--app-border)] hover:border-[var(--app-accent)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Зв’язатися</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </button>
            </div>
          </div>

          {/* Right Column: Anastasia Portrait Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
              {/* Decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[var(--app-accent)]/20 via-sky-500/10 to-transparent rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative rounded-3xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface-card)] shadow-lg">
                <img
                  src="./extracted/img_103.jpg"
                  alt="Анастасія Ніколаєва (Стюша)"
                  className="w-full aspect-[3/4] object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold">Анастасія (Стюша)</div>
                      <div className="text-[11px] text-neutral-300 font-mono">3D Artist • Graphic Designer</div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Відкрита до проєктів" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio paragraph card from PDF */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--app-accent)] block">
            ПРО МЕНЕ
          </span>
          <div className="space-y-2.5 text-sm sm:text-base text-[var(--app-text)] opacity-90 leading-relaxed font-normal">
            <p>
              Привіт! Я Ніколаєва Анастасія, можна просто Стюша — дизайнерка та 3D-художниця, яка працює з багатьма професійними інструментами для створення 3D-моделей та анімацій.
            </p>
            <p>
              Мені подобається створювати об’єкти, інтер’єрні концепції та візуальні рішення, які передають настрій і характер. Люблю деталі, структуру та чисту естетику, а кожен проєкт розглядаю як можливість поєднати креативність із логікою.
            </p>
            <p className="font-semibold text-[var(--app-accent)] pt-1">
              У цьому портфоліо — мій стиль, мій погляд і моє бачення дизайну.
            </p>
          </div>
        </div>
      </section>

      {/* Directory of Portfolio Entities (Pages) */}
      <section className="space-y-6 pt-6 border-t border-[var(--app-border)]">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--app-accent)] block mb-1">
            РОЗДІЛИ ПОРТФОЛІО
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--app-text)]">
            Окремі сторінки робіт
          </h2>
          <p className="text-xs sm:text-sm text-[var(--app-muted)] mt-1">
            Кожен напрямок винесено в окремий детальний розділ з автентичними роботами з портфоліо:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioSections.map((sec) => (
            <div
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="cursor-pointer group rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] hover:border-[var(--app-accent)] transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Real Project Image Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-xs text-white border border-white/20">
                    {sec.count}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[var(--app-accent)]/80 backdrop-blur-xs text-white">
                    «{sec.tagline}»
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-[var(--app-text)] group-hover:text-[var(--app-accent)] transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-[var(--app-muted)] leading-relaxed">
                    {sec.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[var(--app-accent)] pt-3 border-t border-[var(--app-border)]">
                  <span>Перейти до розділу</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Quick Bar */}
      <section className="p-6 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-4 text-[var(--app-muted)]">
          <span className="font-semibold text-[var(--app-text)]">Прямий зв’язок:</span>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[var(--app-accent)] font-mono">
            {PERSONAL_INFO.phone}
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[var(--app-accent)] font-mono">
            {PERSONAL_INFO.email}
          </a>
        </div>

        <button
          onClick={() => onNavigate('contacts')}
          className="text-xs font-bold text-[var(--app-accent)] hover:underline flex items-center gap-1"
        >
          Відкрити контакти <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
}
