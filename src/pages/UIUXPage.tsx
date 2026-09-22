import { useState } from 'react';
import { PageId } from '../types';
import { ArrowLeft, ArrowRight, Smartphone, Monitor, Database, CheckCircle2 } from 'lucide-react';

interface UIUXPageProps {
  onNavigate: (page: PageId) => void;
}

export function UIUXPage({ onNavigate }: UIUXPageProps) {
  const [activeCase, setActiveCase] = useState<'medtalks' | 'yumio' | 'srm'>('medtalks');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-[var(--app-border)] pb-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)]">
            СТОРІНКА 07 • UI/UX DESIGN & DIGITAL PRODUCTS
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Дата: 2021 — дотепер
          </span>
        </div>

        <span className="text-xs font-mono font-semibold uppercase text-[var(--app-accent)] block">
          Від прототипу до взаємодії
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] uppercase">
          UI/UX ДИЗАЙН
        </h1>

        <p className="text-sm sm:text-base text-[var(--app-muted)] leading-relaxed pt-2 max-w-3xl">
          Проєктування складних інтерфейсів та користувацького досвіду. Поєдную аналітику з естетикою: від глибинних досліджень користувачів (CJM) до розробки дизайн-систем та інтерактивних прототипів. Створення продуктів, якими приємно та зручно користуватися.
        </p>
      </div>

      {/* Case Study Tabs */}
      <div className="flex items-center gap-2 border-b border-[var(--app-border)] pb-3 overflow-x-auto">
        {[
          { id: 'medtalks', label: '01. MEDTALKS • Medical Platform' },
          { id: 'yumio', label: '02. YUMIO • E-Commerce & CJM' },
          { id: 'srm', label: '03. SRM-SYSTEM • Art School' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCase(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeCase === tab.id
                ? 'bg-[var(--app-accent)] text-white shadow-xs'
                : 'text-[var(--app-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-card)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Case Study 1: MEDTALKS */}
      {activeCase === 'medtalks' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase font-mono">
                  CASE STUDY 01 • TELEMEDICINE & SOCIAL
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  MedTalks. Medical Social Platform
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                Figma • Auto Layout 5.0 • Desktop App (iMac View)
              </span>
            </div>

            <p className="text-sm text-[var(--app-text)] opacity-90 leading-relaxed">
              Платформа для прямого зв’язку між профільними лікарями та пацієнтами. Включає захищений медичний чат для надсилання аналізів, інтерактивний розклад консультацій, онлайн-візити та особистий кабінет лікаря (демонстрація профілю лікаря-кардіолога Ірини Остапчук).
            </p>

            {/* Authentic Project Mockup Image */}
            <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-md group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="./extracted/img_32.jpg"
                  alt="MedTalks Desktop Mockup iMac"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-xs text-sky-300 border border-sky-500/30">
                  iMac 27" Retina Display
                </div>
              </div>
              <div className="p-3.5 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--app-muted)]">
                <span>Проєкт: MedTalks Telemedicine Portal</span>
                <span>Інтерфейс: Профіль лікаря, консультації, медичний чат</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1">
                <strong className="block text-[var(--app-accent)] font-semibold">Швидкий запис:</strong>
                <p className="opacity-80">Оптимізований флоу бронювання слота до лікаря в 3 кліки без надлишкових полів.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1">
                <strong className="block text-[var(--app-accent)] font-semibold">UX Дослідження:</strong>
                <p className="opacity-80">Глибинні інтерв’ю з лікарями дозволили винести симптоматику пацієнта в структурований чекліст.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1">
                <strong className="block text-[var(--app-accent)] font-semibold">Доступність (WCAG):</strong>
                <p className="opacity-80">Контрастність тексту 5.5:1, підтримка скрінрідерів та великі клікабельні зони.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Study 2: YUMIO */}
      {activeCase === 'yumio' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase font-mono">
                  CASE STUDY 02 • E-COMMERCE & CJM
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  Yumio. E-Commerce Confectionery App
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                Figma • Mobile First • 5 iPhone Screens Flow
              </span>
            </div>

            <p className="text-sm text-[var(--app-text)] opacity-90 leading-relaxed">
              Інтернет-магазин авторських десертів та кондитерських виробів з акцентом на швидку мобільну покупку, вибір смаків, онлайн-конструктор подарункових боксів та оплату в один клік.
            </p>

            {/* Authentic Project Mockup Image */}
            <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-md group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="./extracted/img_30.jpg"
                  alt="Yumio Mobile App 5 Screens Mockup"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-xs text-amber-300 border border-amber-500/30">
                  5 × iOS Mobile Screens
                </div>
              </div>
              <div className="p-3.5 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--app-muted)]">
                <span>Проєкт: Yumio Desserts Mobile Experience</span>
                <span>Флоу: Каталог • Конструктор боксу • Картка товару • Кошик • Оплата</span>
              </div>
            </div>

            {/* CJM Stepper representation */}
            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 font-mono block">
                CUSTOMER JOURNEY MAP (CJM) ШЛЯХ КЛІЄНТА:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-amber-300 dark:border-amber-800 space-y-1">
                  <span className="text-[10px] font-mono text-amber-600">01. ВІТРИНА</span>
                  <div className="font-bold text-[var(--app-text)]">Вибір смаків</div>
                  <p className="text-[11px] opacity-75">Категорії мочі, макаронів, тартів</p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-amber-300 dark:border-amber-800 space-y-1">
                  <span className="text-[10px] font-mono text-amber-600">02. БОКС</span>
                  <div className="font-bold text-[var(--app-text)]">Конструктор набору</div>
                  <p className="text-[11px] opacity-75">Вибір розміру 6 / 12 / 24 шт</p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-amber-300 dark:border-amber-800 space-y-1">
                  <span className="text-[10px] font-mono text-amber-600">03. ЛИСТІВКА</span>
                  <div className="font-bold text-[var(--app-text)]">Кастомізація</div>
                  <p className="text-[11px] opacity-75">Додавання підпису та стрічки</p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-amber-300 dark:border-amber-800 space-y-1">
                  <span className="text-[10px] font-mono text-amber-600">04. ОПЛАТА</span>
                  <div className="font-bold text-[var(--app-text)]">One-Click Pay</div>
                  <p className="text-[11px] opacity-75">Apple Pay / Google Pay без зайвих полів</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Study 3: SRM */}
      {activeCase === 'srm' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono">
                  CASE STUDY 03 • B2B DASHBOARD & ERP
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  SRM-System. Art School Management
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                B2B Dashboard • MacBook Mockup • Complex Data Tables
              </span>
            </div>

            <p className="text-sm text-[var(--app-text)] opacity-90 leading-relaxed">
              Комплексна веб-система для управління мистецькими школами та студіями: ведення обліку відвідувань учнів, планування зайнятості майстерень живопису та 3D-графіки, розклад викладачів, контроль залишків художніх матеріалів і фінансовий білінг.
            </p>

            {/* Authentic Project Mockup Image */}
            <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-md group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="./extracted/img_47.jpg"
                  alt="SRM Art School MacBook Mockup"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-xs text-indigo-300 border border-indigo-500/30">
                  MacBook Pro 16"
                </div>
              </div>
              <div className="p-3.5 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--app-muted)]">
                <span>Проєкт: SRM-System Art School</span>
                <span>Модулі: Студенти • Розклад груп • Зайнятість аудиторій • Фінанси</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-700 text-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-neutral-800">
                <span className="text-neutral-400 block text-[10px]">АКТИВНІ УЧНІ</span>
                <strong className="text-base text-white">248 учнів</strong>
              </div>
              <div className="p-3 rounded-xl bg-neutral-800">
                <span className="text-neutral-400 block text-[10px]">ЗАВАНТАЖЕННЯ ЗАЛІВ</span>
                <strong className="text-base text-indigo-400">92% ефективність</strong>
              </div>
              <div className="p-3 rounded-xl bg-neutral-800">
                <span className="text-neutral-400 block text-[10px]">КУРСИ 3D / АРТ</span>
                <strong className="text-base text-white">14 активних груп</strong>
              </div>
              <div className="p-3 rounded-xl bg-neutral-800">
                <span className="text-neutral-400 block text-[10px]">АВТОМАТИЗАЦІЯ</span>
                <strong className="text-base text-emerald-400">-60% часу на облік</strong>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--app-border)]">
        <button
          onClick={() => onNavigate('interior3d')}
          className="text-xs font-semibold text-[var(--app-muted)] hover:text-[var(--app-text)] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Назад: 3D та Інтер’єр
        </button>
        <button
          onClick={() => onNavigate('decor')}
          className="text-xs font-semibold text-[var(--app-accent)] hover:underline flex items-center gap-1.5"
        >
          Далі: Декорація закладів <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
