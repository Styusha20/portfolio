import { useState } from 'react';
import { PageId } from '../types';
import { ArrowLeft, ArrowRight, Grid, BookOpen, Layers } from 'lucide-react';

interface EditorialPageProps {
  onNavigate: (page: PageId) => void;
}

export function EditorialPage({ onNavigate }: EditorialPageProps) {
  const [showGrid, setShowGrid] = useState<boolean>(true);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-[var(--app-border)] pb-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)]">
            СТОРІНКА 05 • EDITORIAL DESIGN & PREPRESS
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Дата: 2021 — дотепер
          </span>
        </div>

        <span className="text-xs font-mono font-semibold uppercase text-[var(--app-accent)] block">
          Від ідеї до складної верстки
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] uppercase">
          БАГАТОСТОРІНКОВІ ВИДАННЯ
        </h1>

        <p className="text-sm sm:text-base text-[var(--app-muted)] leading-relaxed pt-2 max-w-3xl">
          Розробка структури, дизайну та верстки багатосторінкових видань: комерційних каталогів, корпоративних буклетів та брендбуків. Повний цикл створення: від побудови модульної сітки та типографічної ієрархії до додрукарської підготовки (prepress).
        </p>
      </div>

      {/* Interactive Magazine / Catalog Spread Preview with Grid Toggle */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--app-accent)] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> 01. Каталог спортивного взуття «ASICS Footwear Collection»
            </span>
            <span className="text-xs text-[var(--app-muted)]">
              Adobe InDesign • 12-колонкова модульна сітка • CMYK ISO Coated v2
            </span>
          </div>

          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 border transition-all cursor-pointer ${
              showGrid
                ? 'bg-[var(--app-accent)] text-white border-[var(--app-accent)]'
                : 'bg-[var(--app-surface-card)] text-[var(--app-muted)] border-[var(--app-border)]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{showGrid ? 'Модульна сітка: УВІМКНЕНО' : 'Сітка: ВИМКНЕНО'}</span>
          </button>
        </div>

        {/* Spread Visual Container with Real Image */}
        <div className="relative rounded-3xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-xl group">
          {/* Overlay Grid lines if active */}
          {showGrid && (
            <div className="absolute inset-0 pointer-events-none z-20 grid grid-cols-12 gap-3 p-6 sm:p-10 opacity-30">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full bg-cyan-400 border-x border-cyan-400/50" />
              ))}
            </div>
          )}

          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
            <img
              src="/extracted/img_51.jpg"
              alt="ASICS Catalog Open Spread"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/75 backdrop-blur-xs text-sky-300 border border-sky-400/30">
              Розворот каталогу: Solution Speed FF & Gel-Resolution
            </div>
          </div>

          <div className="p-4 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <strong className="text-[var(--app-text)] block">Типографічна ієрархія та вирівнювання:</strong>
              <p className="text-[var(--app-muted)]">Прив’язка тексту до Baseline Grid 8pt, точний контроль кернінгу та вильоти під обріз (Bleed 3 мм).</p>
            </div>
            <span className="font-mono text-[var(--app-muted)] text-[11px]">InDesign • 3200×2300px</span>
          </div>
        </div>

        {/* ASICS Sub-Views Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
              <img src="/extracted/img_54.jpg" alt="ASICS Stack Mockup" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[var(--app-text)]">Стопка надрукованих каталогів</h4>
              <p className="text-[11px] text-[var(--app-muted)]">Обкладинка з soft-touch ламінацією та КБС.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
              <img src="/extracted/img_65.jpg" alt="ASICS Perspective Cover" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[var(--app-text)]">Перспективний мокап каталогу</h4>
              <p className="text-[11px] text-[var(--app-muted)]">Презентація формату та текстури паперу.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
              <img src="/extracted/img_33.jpg" alt="ASICS Spread 2" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[var(--app-text)]">Розворот Blade FF & Gel-Tactic</h4>
              <p className="text-[11px] text-[var(--app-muted)]">Таблиця розмірів та технічні характеристики.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: POSMOS Brandbook & Tri-fold Leaflet */}
      <section className="space-y-6 pt-4 border-t border-[var(--app-border)]">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--app-accent)] block mb-1">
            КОРПОРАТИВНІ БРОШУРИ ТА БРЕНДБУКИ
          </span>
          <h2 className="text-2xl font-black text-[var(--app-text)]">
            02. Брендбук POSMOS та Корпоративний буклет
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* POSMOS Brandbook */}
          <div className="p-5 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900">
              <img src="/extracted/img_49.jpg" alt="POSMOS Brandbook Mockup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-[var(--app-accent)] uppercase font-semibold">BRAND GUIDELINES</span>
              <h3 className="text-base font-bold text-[var(--app-text)]">POSMOS Brandbook & Corporate Identity</h3>
              <p className="text-xs text-[var(--app-muted)] leading-relaxed">
                Багатосторінкове керівництво з використання фірмового стилю: правила охоронної зони логотипу, колірні розкладки CMYK / RGB / Pantone та фотостилістика.
              </p>
            </div>
          </div>

          {/* Tri-fold Brochure */}
          <div className="p-5 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900">
              <img src="/extracted/img_77.jpg" alt="Tri-fold brochure" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase font-semibold">TRI-FOLD LEAFLET</span>
              <h3 className="text-base font-bold text-[var(--app-text)]">«Формальне навчання» • Корпоративний буклет</h3>
              <p className="text-xs text-[var(--app-muted)] leading-relaxed">
                Євробуклет з 2 фальцами (Tri-fold): оптимальна композиційна подача освітніх та сертифікаційних програм для бізнесу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Competencies Grid */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-[var(--app-text)]">
          Комплексний процес верстки та додрукарської підготовки
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1.5">
            <span className="text-xs font-bold uppercase text-[var(--app-accent)] font-mono">01. СІТКА ТА СТРУКТУРА</span>
            <p className="text-[var(--app-text)] opacity-90 leading-relaxed">
              Побудова суворої 12-колонкової сітки з вирівнюванням тексту за базовими лініями (Baseline Grid) в Adobe InDesign.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1.5">
            <span className="text-xs font-bold uppercase text-[var(--app-accent)] font-mono">02. ТИПОГРАФІКА</span>
            <p className="text-[var(--app-text)] opacity-90 leading-relaxed">
              Контроль висячих рядків, нерозривних пробілів, коректне кернінг-парування та наскрізна ієрархія заголовків H1-H4.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1.5">
            <span className="text-xs font-bold uppercase text-[var(--app-accent)] font-mono">03. PREPRESS & ДРУК</span>
            <p className="text-[var(--app-text)] opacity-90 leading-relaxed">
              Вильоти під обріз (Bleed 3-5 мм), розрахунок корінця під КБС/скобу, генерація PDF/X-1a з контролем Total Ink Limit.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--app-border)]">
        <button
          onClick={() => onNavigate('commercial')}
          className="text-xs font-semibold text-[var(--app-muted)] hover:text-[var(--app-text)] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Назад: Комерційна графіка
        </button>
        <button
          onClick={() => onNavigate('interior3d')}
          className="text-xs font-semibold text-[var(--app-accent)] hover:underline flex items-center gap-1.5"
        >
          Далі: 3D та Інтер’єр <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
