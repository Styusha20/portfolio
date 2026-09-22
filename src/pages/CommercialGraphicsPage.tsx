import { useState } from 'react';
import { PageId } from '../types';
import { ArrowLeft, ArrowRight, Layers, Eye, CheckCircle2 } from 'lucide-react';

interface CommercialGraphicsPageProps {
  onNavigate: (page: PageId) => void;
}

export function CommercialGraphicsPage({ onNavigate }: CommercialGraphicsPageProps) {
  const [activeTab, setActiveTab] = useState<'print' | 'outdoor' | 'digital'>('outdoor');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-[var(--app-border)] pb-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)]">
            СТОРІНКА 04 • COMMERCIAL & PROMO GRAPHICS
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Дата: 2021 — дотепер
          </span>
        </div>

        <span className="text-xs font-mono font-semibold uppercase text-[var(--app-accent)] block">
          Від кліку до дії
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] uppercase">
          КОМЕРЦІЙНА ГРАФІКА
        </h1>

        <p className="text-sm sm:text-base text-[var(--app-muted)] leading-relaxed pt-2 max-w-3xl">
          Розробка рекламних креативів для Digital та зовнішньої реклами. Створюю впізнавані візуальні символи, оптимізовані під різні носії — від фасадних банерів до рекламних Stories та поліграфії. Орієнтація на конверсію та впізнаваність бренду.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 border-b border-[var(--app-border)] pb-3">
        {[
          { id: 'outdoor', label: 'OUTDOOR ADS (Зовнішня реклама)' },
          { id: 'print', label: 'PRINT & PROMOTION (Поліграфія)' },
          { id: 'digital', label: 'DIGITAL & SMM (Креативи)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-[var(--app-accent)] text-white shadow-xs'
                : 'text-[var(--app-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-card)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Showcase based on tab */}
      {activeTab === 'outdoor' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-[var(--app-accent)] uppercase font-mono">
                  OUTDOOR ADS • СІТІЛАЙТИ ТА ЗОВНІШНІ ПОСТЕРИ
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  Roov Cafe • Серія іміджевих плакатів та сітілайтів
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                Формат: 1.2 × 1.8 м (Citylight) • CMYK 150-300 DPI
              </span>
            </div>

            <p className="text-sm text-[var(--app-text)] opacity-90 leading-relaxed">
              Комплексна зовнішня рекламна кампанія для мережі кав’ярень Roov Cafe: сезонні постери для напоїв, соковита фуд-стилістика, яскраві кольорові контрасти та чітка типографіка, розрахована на миттєве зчитування перехожими та водіями.
            </p>

            {/* Citylight in Environment Mockup */}
            <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-md group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/extracted/img_52.jpg"
                  alt="Roov Cafe Citylight Mockup"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-xs text-amber-300 border border-amber-500/30">
                  Міський сітілайт (Outdoor View)
                </div>
              </div>
              <div className="p-3.5 bg-[var(--app-surface)] border-t border-[var(--app-border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--app-muted)]">
                <span>Локація: Центральні пішохідні зони</span>
                <span>Носій: Світловий короб (Backlit) 1200×1800 мм</span>
              </div>
            </div>

            {/* Poster Pair: Coffee & Smoothie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] space-y-3 p-4">
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-neutral-900">
                  <img
                    src="/extracted/img_13.jpg"
                    alt="Roov Cafe Coffee Poster"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--app-text)]">«Смак, що надихає» — Roov Coffee</h4>
                  <p className="text-xs text-[var(--app-muted)] mt-1">Теплий кавовий постер із зернами та чашкою свіжого еспресо.</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] space-y-3 p-4">
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-neutral-900">
                  <img
                    src="/extracted/img_12.jpg"
                    alt="Roov Cafe Smoothie Poster"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--app-text)]">«Свіжість у кожній краплі» — Roov Smoothie</h4>
                  <p className="text-xs text-[var(--app-muted)] mt-1">Освіжаючий літній плакат для фруктових смузі та холодних фрешів.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)]">
                <strong className="block text-[var(--app-accent)] mb-0.5">Контрастність:</strong>
                <p className="opacity-80">Вивірена контрастність для читабельності з відстані 10–25 метрів.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)]">
                <strong className="block text-[var(--app-accent)] mb-0.5">Типографіка:</strong>
                <p className="opacity-80">Великі акцидентні заголовки з чіткою структурою субтитрів.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)]">
                <strong className="block text-[var(--app-accent)] mb-0.5">Препрес:</strong>
                <p className="opacity-80">Підготовка макетів під широкоформатний сольвентний та УФ-друк.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'print' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-[var(--app-accent)] uppercase font-mono">
                  PRINT & PROMOTION • ПОЛІГРАФІЯ ТА СЕРТИФІКАТИ
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  Сертифікати, флаєри та афіші подій
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                Формати: А4 / А5 / Єврофлаєр • 300 DPI • Bleed 2-3 мм
              </span>
            </div>

            {/* Gift Certificates Grid */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--app-accent)] mb-3">
                ПОДАРУНКОВІ СЕРТИФІКАТИ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Roov Cafe Certificates */}
                <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                      <img src="/extracted/img_29.jpg" alt="Roov Certificate 2000" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                    </div>
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                      <img src="/extracted/img_14.jpg" alt="Roov Certificate 1000" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[var(--app-text)]">Roov Cafe • Сертифікати 2000 та 1000 грн</h4>
                    <p className="text-xs text-[var(--app-muted)] mt-0.5">Преміальний чорно-золотий дизайн на матовому дизайнерському папері.</p>
                  </div>
                </div>

                {/* Victory Travel Certificates */}
                <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                      <img src="/extracted/img_67.jpg" alt="Victory Travel Bus Certificate" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                    </div>
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                      <img src="/extracted/img_23.jpg" alt="Victory Travel Flight Certificate" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[var(--app-text)]">Victory Travel • Подарункові сертифікати на подорожі</h4>
                    <p className="text-xs text-[var(--app-muted)] mt-0.5">Автобусні та авіа-тури: яскрава фірмова графіка для туроператора.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event & Service Posters */}
            <div className="pt-4 border-t border-[var(--app-border)]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--app-accent)] mb-3">
                АФІШІ ТА РЕКЛАМНІ ПЛАКАТИ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Roov Repair */}
                <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3.5 space-y-2.5">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] bg-neutral-900">
                    <img src="/extracted/img_26.jpg" alt="Roov Repair Poster" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-bold text-xs text-[var(--app-text)]">Ремонт кавомашин Roov</h4>
                  <p className="text-[11px] text-[var(--app-muted)]">Сервісний інфо-постер для клієнтів кав’ярні.</p>
                </div>

                {/* 2. Restaurant Sim Sorok Event */}
                <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3.5 space-y-2.5">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] bg-neutral-900">
                    <img src="/extracted/img_15.jpg" alt="Sim Sorok 8 March Poster" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-bold text-xs text-[var(--app-text)]">«Сім Сорок» • 8 Березня</h4>
                  <p className="text-[11px] text-[var(--app-muted)]">Святкова вечірка: жива музика, саксофон та компліменти.</p>
                </div>

                {/* 3. Kolibri School Enrollment */}
                <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3.5 space-y-2.5">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] bg-neutral-900">
                    <img src="/extracted/img_27.jpg" alt="Kolibri School Poster" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-bold text-xs text-[var(--app-text)]">«Колібрі» • 1 клас</h4>
                  <p className="text-[11px] text-[var(--app-muted)]">Набір учнів до приватного інклюзивного простору.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'digital' && (
        <section className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--app-border)] pb-4">
              <div>
                <span className="text-xs font-bold text-[var(--app-accent)] uppercase font-mono">
                  DIGITAL & SMM • INSTAGRAM CREATIVES
                </span>
                <h2 className="text-2xl font-black text-[var(--app-text)]">
                  Instagram Stories, банери та таргетований контент
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--app-muted)]">
                1080×1920 px (9:16) • 1:1 Feed • sRGB
              </span>
            </div>

            <p className="text-sm text-[var(--app-text)] opacity-90 leading-relaxed">
              Динамічні рекламні креативи для промоції в соціальних мережах (Instagram, Facebook, Telegram). Фокус на чіткому заклику до дії (CTA), швидкому донесенні вигоди та впізнаваності фірмового стилю.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Creative 1 */}
              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
                <div className="rounded-xl overflow-hidden aspect-[9/16] bg-neutral-900">
                  <img src="/extracted/img_13.jpg" alt="Coffee Story" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="p-1">
                  <span className="text-[10px] font-mono text-[var(--app-accent)] font-semibold uppercase">Roov Cafe</span>
                  <h4 className="font-bold text-xs text-[var(--app-text)]">Ранкова кава зі знижкою</h4>
                </div>
              </div>

              {/* Creative 2 */}
              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
                <div className="rounded-xl overflow-hidden aspect-[9/16] bg-neutral-900">
                  <img src="/extracted/img_12.jpg" alt="Smoothie Story" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="p-1">
                  <span className="text-[10px] font-mono text-[var(--app-accent)] font-semibold uppercase">Roov Drinks</span>
                  <h4 className="font-bold text-xs text-[var(--app-text)]">Літні смузі та фреші</h4>
                </div>
              </div>

              {/* Creative 3 */}
              <div className="rounded-2xl overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)] p-3 space-y-2">
                <div className="rounded-xl overflow-hidden aspect-[9/16] bg-neutral-900">
                  <img src="/extracted/img_27.jpg" alt="School Story" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="p-1">
                  <span className="text-[10px] font-mono text-[var(--app-accent)] font-semibold uppercase">Колібрі Школа</span>
                  <h4 className="font-bold text-xs text-[var(--app-text)]">Запис на пробний день</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--app-border)]">
        <button
          onClick={() => onNavigate('logofolio')}
          className="text-xs font-semibold text-[var(--app-muted)] hover:text-[var(--app-text)] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Назад: Логофоліо
        </button>
        <button
          onClick={() => onNavigate('editorial')}
          className="text-xs font-semibold text-[var(--app-accent)] hover:underline flex items-center gap-1.5"
        >
          Далі: Багатосторінкові видання <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
