import { useState } from 'react';
import { PageId } from '../types';
import { ArrowLeft, ArrowRight, Sparkles, Heart, Snowflake, CheckCircle2 } from 'lucide-react';

interface DecorPageProps {
  onNavigate: (page: PageId) => void;
}

export function DecorPage({ onNavigate }: DecorPageProps) {
  const [activeSeason, setActiveSeason] = useState<'romantic' | 'winter'>('romantic');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-[var(--app-border)] pb-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)]">
            СТОРІНКА 08 • COMMERCIAL SPATIAL DECORATION
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Дата: 2021 — дотепер
          </span>
        </div>

        <span className="text-xs font-mono font-semibold uppercase text-[var(--app-accent)] block">
          Від креативу до атмосфери
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] uppercase">
          ДЕКОРАЦІЯ КОМЕРЦІЙНИХ ЗАКЛАДІВ
        </h1>

        <p className="text-sm sm:text-base text-[var(--app-muted)] leading-relaxed pt-2 max-w-3xl">
          Створення унікальних візуальних концепцій та оформлення для комерційних закладів, ресторанів, івентів та фотозон. Повний цикл: від розробки 3D-ескізів та підбору матеріалів до монтажу та авторського нагляду. Проєкти, які приваблюють відвідувачів та стають вірусними у соцмережах.
        </p>
      </div>

      {/* Season Toggle */}
      <div className="flex items-center gap-2 border-b border-[var(--app-border)] pb-3">
        <button
          onClick={() => setActiveSeason('romantic')}
          className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            activeSeason === 'romantic'
              ? 'bg-[var(--app-accent)] text-white shadow-xs'
              : 'text-[var(--app-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-card)]'
          }`}
        >
          <Heart className="w-3.5 h-3.5" />
          <span>ROMANTIC SEASON (Романтичний сезон)</span>
        </button>

        <button
          onClick={() => setActiveSeason('winter')}
          className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            activeSeason === 'winter'
              ? 'bg-[var(--app-accent)] text-white shadow-xs'
              : 'text-[var(--app-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-card)]'
          }`}
        >
          <Snowflake className="w-3.5 h-3.5" />
          <span>WINTER SEASON (Зимовий сезон)</span>
        </button>
      </div>

      {/* Romantic Season Showcase */}
      {activeSeason === 'romantic' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase font-mono">
                  СЕЗОННЕ ОФОРМЛЕННЯ • РОМАНТИЧНИЙ СЕЗОН
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  Романтичний сезон: Інсталяції для ресторанів та барів
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                Локація: Ресторани, кав’ярні, фотозони до Дня закоханих
              </span>
            </div>

            <p className="text-sm text-[var(--app-text)] opacity-90 leading-relaxed">
              Комплексне атмосферне оформлення закладу: підвісні квіткові хмари, романтичні підвісні літери, гірлянди сердець та акцентне тепле підсвічування. Створення затишної та фотогенічної атмосфери, яка мотивує гостей робити фотографії та ділитися ними в Instagram.
            </p>

            {/* Main Romantic Photo Display */}
            <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-md group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/extracted/img_36.jpg"
                  alt="Romantic Restaurant Decor"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-xs text-rose-300 border border-rose-500/30">
                  Valentine's Day Atmosphere • Загальний план
                </div>
              </div>
              <div className="p-3.5 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--app-muted)]">
                <span>Проєкт: Романтичне оформлення залу та барної зони</span>
                <span>Матеріали: Підвісний декор, паперові квіти, світлові гірлянди</span>
              </div>
            </div>

            {/* Detail Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                  <img src="/extracted/img_95.jpg" alt="Suspended Letters" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-xs text-[var(--app-text)]">Підвісні літери та стельовий декор</h4>
                <p className="text-[11px] text-[var(--app-muted)]">Об’ємні елементи з акцентною ілюмінацією.</p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                  <img src="/extracted/img_88.jpg" alt="Heart Garlands" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-xs text-[var(--app-text)]">Гірлянди сердець та фотозона</h4>
                <p className="text-[11px] text-[var(--app-muted)]">Динамічна композиція для селфі гостей.</p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                  <img src="/extracted/img_39.jpg" alt="Table Atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-xs text-[var(--app-text)]">Сервірування та локальне світло</h4>
                <p className="text-[11px] text-[var(--app-muted)]">Теплі акценти для столиків закладу.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)]">
                <strong className="block text-[var(--app-accent)] mb-0.5">3D-ескіз перед монтажем:</strong>
                <p className="opacity-80">Попереднє 3D-моделювання у Blender для узгодження з замовником масштабу та світла.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)]">
                <strong className="block text-[var(--app-accent)] mb-0.5">Безпека та довговічність:</strong>
                <p className="opacity-80">Використання негорючих матеріалів та надійних прихованих кріплень.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)]">
                <strong className="block text-[var(--app-accent)] mb-0.5">Вірусність у соцмережах:</strong>
                <p className="opacity-80">Фотозона спроєктована під правильний ракурс для камер смартфонів (Selfie & Group).</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Winter Season Showcase */}
      {activeSeason === 'winter' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase font-mono">
                  СЕЗОННЕ ОФОРМЛЕННЯ • ЗИМОВИЙ СЕЗОН
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  Зимовий сезон: Хвойні гірлянди та святкове дзеркало
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                Локація: Ресторан «Сім Сорок»
              </span>
            </div>

            <p className="text-sm text-[var(--app-text)] opacity-90 leading-relaxed">
              Новорічне оформлення вхідної групи та банкетного залу ресторану «Сім Сорок»: масивне обрамлення вінтажного дзеркала пухнастою хвойною гірляндою, натуральними шишками, золотистими кулями та вплетеною теплою LED-ілюмінацією.
            </p>

            {/* Winter Photo Display */}
            <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-md group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/extracted/img_44.jpg"
                  alt="Sim Sorok Christmas Garland Mirror"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-xs text-sky-300 border border-sky-500/30">
                  Ресторан «Сім Сорок» • Святкове дзеркало
                </div>
              </div>
              <div className="p-3.5 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--app-muted)]">
                <span>Проєкт: Зимова фотозона ресторану «Сім Сорок»</span>
                <span>Матеріали: Лита хвоя, ялинові шишки, ялинкові прикраси, LED-гірлянди</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1">
                <strong className="block text-[var(--app-accent)] font-semibold">Центральна точка уваги:</strong>
                <p className="opacity-80">Оформлене дзеркало стало головною селфі-локацією ресторану під час новорічних корпоративів та святкувань.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] space-y-1">
                <strong className="block text-[var(--app-accent)] font-semibold">Стійкість та безпека:</strong>
                <p className="opacity-80">Надійна фіксація на масивній рамі без пошкодження стін та дзеркального полотна.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--app-border)]">
        <button
          onClick={() => onNavigate('uiux')}
          className="text-xs font-semibold text-[var(--app-muted)] hover:text-[var(--app-text)] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Назад: UI/UX Дизайн
        </button>
        <button
          onClick={() => onNavigate('contacts')}
          className="text-xs font-semibold text-[var(--app-accent)] hover:underline flex items-center gap-1.5"
        >
          Далі: Контакти <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
