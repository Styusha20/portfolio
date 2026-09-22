import { useState } from 'react';
import { PageId } from '../types';
import { ArrowLeft, ArrowRight, Sun, Moon, Box, Camera, CheckCircle2 } from 'lucide-react';

interface Interior3DPageProps {
  onNavigate: (page: PageId) => void;
}

export function Interior3DPage({ onNavigate }: Interior3DPageProps) {
  const [viewpoint, setViewpoint] = useState<'private' | 'openspace' | 'details'>('private');
  const [isEvening, setIsEvening] = useState<boolean>(false);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-[var(--app-border)] pb-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)]">
            СТОРІНКА 06 • 3D VISUALIZATION & INTERIOR ARCHITECTURE
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Дата: 2021 — дотепер
          </span>
        </div>

        <span className="text-xs font-mono font-semibold uppercase text-[var(--app-accent)] block">
          Від плану до візуалізації
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] uppercase">
          ІНТЕР'ЄР ТА 3D МОДЕЛЮВАННЯ
        </h1>

        <p className="text-sm sm:text-base text-[var(--app-muted)] leading-relaxed pt-2 max-w-3xl">
          Розробка комплексних дизайн-проєктів інтер'єрів: від функціонального планування до фотореалістичної 3D візуалізації. Створюю атмосфери, де кожна деталь має значення: від гри світла й тіні до тактильності матеріалів. Поєднання ергономіки та сучасних естетичних трендів.
        </p>
      </div>

      {/* Interactive 3D Render Canvas */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Viewpoint Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[var(--app-surface-card)] border border-[var(--app-border)]">
            {[
              { id: 'private', label: '01. PRIVATE AREA (Спальня)' },
              { id: 'openspace', label: '02. OPEN SPACE (Вітальня)' },
              { id: 'details', label: '03. DETAILS (Вузли та текстури)' },
            ].map((vp) => (
              <button
                key={vp.id}
                onClick={() => setViewpoint(vp.id as any)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  viewpoint === vp.id
                    ? 'bg-[var(--app-accent)] text-white shadow-xs'
                    : 'text-[var(--app-muted)] hover:text-[var(--app-text)]'
                }`}
              >
                {vp.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[var(--app-muted)]">
            Blender Cycles • 3840×2160 PBR • Archicad
          </span>
        </div>

        {/* 3D Visualizer Render Presentation */}
        <div className="rounded-3xl overflow-hidden border border-[var(--app-border)] bg-neutral-950 shadow-xl group">
          {/* Main Display Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
            <img
              src={
                viewpoint === 'private'
                  ? '/extracted/img_2.jpg'
                  : viewpoint === 'openspace'
                  ? '/extracted/img_9.jpg'
                  : '/extracted/img_10.jpg'
              }
              alt="3D Interior Visualization Render"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            />
            
            {/* Top Badge Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300 border border-amber-400/30">
                {viewpoint === 'private' && 'RENDER 01 • MASTER BEDROOM & PRIVATE ZONE'}
                {viewpoint === 'openspace' && 'RENDER 02 • OPEN LIVING SPACE & LOUNGE'}
                {viewpoint === 'details' && 'RENDER 03 • DRESSING VANITY & LIGHTING DETAILS'}
              </span>
            </div>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                {viewpoint === 'private' && 'Приватна зона: Спальня з кастомним освітленням та стіновими панелями'}
                {viewpoint === 'openspace' && 'Відкритий простір: Зонування вітальні з ТВ-модулем та фіто-елементами'}
                {viewpoint === 'details' && 'Деталізація: Туалетний столик, кругле LED-дзеркало та текстури каменю'}
              </h3>
              <p className="text-xs text-neutral-300 max-w-2xl leading-relaxed">
                {viewpoint === 'private' && 'Поєднання тактильного текстилю, вертикальних дерев’яних рейок та теплого фонового світла. М’яке розсіяне освітлення створює камерну атмосферу відпочинку.'}
                {viewpoint === 'openspace' && 'Лаконічна геометрія модульних меблів, відкриті стелажі для декору та інтегрована зелень створюють легкий і дихаючий житловий простір.'}
                {viewpoint === 'details' && 'PBR-матеріали високої роздільної здатності: шліфований камінь, фрезеровані панелі, м’який велюр пуфа та матовий метал фурнітури.'}
              </p>
            </div>
          </div>

          {/* Sub-gallery thumbnails for Private Area */}
          {viewpoint === 'private' && (
            <div className="p-4 bg-[var(--app-surface)] border-t border-[var(--app-border)] grid grid-cols-3 gap-3">
              <div className="rounded-xl overflow-hidden border border-[var(--app-border)] aspect-[4/3] relative group/item">
                <img src="/extracted/img_3.jpg" alt="Wardrobe view" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white">Шафа та камінь</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-[var(--app-border)] aspect-[4/3] relative group/item">
                <img src="/extracted/img_10.jpg" alt="Vanity view" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white">Туалетний столик</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-[var(--app-border)] aspect-[4/3] relative group/item">
                <img src="/extracted/img_11.jpg" alt="Headboard view" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white">Узголів’я ліжка</span>
              </div>
            </div>
          )}

          {/* Sub-gallery thumbnails for Details */}
          {viewpoint === 'details' && (
            <div className="p-4 bg-[var(--app-surface)] border-t border-[var(--app-border)] grid grid-cols-3 gap-3">
              <div className="rounded-xl overflow-hidden border border-[var(--app-border)] aspect-[4/3] relative group/item">
                <img src="/extracted/img_2.jpg" alt="Overview" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white">Загальний план</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-[var(--app-border)] aspect-[4/3] relative group/item">
                <img src="/extracted/img_3.jpg" alt="Texture stone" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white">Стіна з каменю</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-[var(--app-border)] aspect-[4/3] relative group/item">
                <img src="/extracted/img_11.jpg" alt="Bed detail" className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-white">Підсвітка рейок</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3 Pillars from PDF */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-[var(--app-accent)]">
            01. PRIVATE AREA
          </span>
          <h4 className="font-bold text-sm text-[var(--app-text)]">Приватна зона</h4>
          <p className="text-xs text-[var(--app-muted)] leading-relaxed">
            Зонування особистого простору з акцентом на затишок, шумоізоляцію та комфортне розсіяне освітлення.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-[var(--app-accent)]">
            02. OPEN SPACE
          </span>
          <h4 className="font-bold text-sm text-[var(--app-text)]">Відкритий простір</h4>
          <p className="text-xs text-[var(--app-muted)] leading-relaxed">
            Функціональні схеми пересування, безбар’єрні переходи, продумана ергономіка для відпочинку й роботи.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-[var(--app-accent)]">
            03. DETAILS
          </span>
          <h4 className="font-bold text-sm text-[var(--app-text)]">Деталізація</h4>
          <p className="text-xs text-[var(--app-muted)] leading-relaxed">
            Високополігональне моделювання складних вузлів меблів, сантехніки та декоративного освітлення.
          </p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--app-border)]">
        <button
          onClick={() => onNavigate('editorial')}
          className="text-xs font-semibold text-[var(--app-muted)] hover:text-[var(--app-text)] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Назад: Багатосторінкові видання
        </button>
        <button
          onClick={() => onNavigate('uiux')}
          className="text-xs font-semibold text-[var(--app-accent)] hover:underline flex items-center gap-1.5"
        >
          Далі: UI/UX Дизайн <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
