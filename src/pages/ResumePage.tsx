import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  EXPERIENCE_DATA, 
  COURSES_DATA, 
  SKILLS_DATA 
} from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Printer 
} from 'lucide-react';

export function ResumePage() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[var(--app-border)] pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)] block mb-1">
            СТОРІНКА 02 • РЕЗЮМЕ ТА ПРОФЕСІЙНИЙ ДОСВІД
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--app-text)]">
            Резюме
          </h1>
          <p className="text-xs sm:text-sm text-[var(--app-muted)] mt-1">
            Ніколаєва Анастасія — Багатопрофільний дизайнер та 3D-художник
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--app-surface-card)] text-[var(--app-text)] border border-[var(--app-border)] hover:border-[var(--app-accent)] transition-all self-start sm:self-auto"
        >
          <Printer className="w-3.5 h-3.5 opacity-60" />
          <span>Друк резюме</span>
        </button>
      </div>

      {/* Philosophy Statement & Portrait from PDF */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] flex flex-col sm:flex-row gap-6 items-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-[var(--app-border)] shadow-xs">
          <img
            src="./extracted/img_103.jpg"
            alt="Ніколаєва Анастасія"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="space-y-2 flex-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--app-accent)] block">
            Професійне позиціонування
          </span>
          <p className="text-sm sm:text-base leading-relaxed text-[var(--app-text)] opacity-90">
            {PERSONAL_INFO.focusText}
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-[var(--app-text)] flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[var(--app-accent)]" />
          Досвід роботи
        </h2>

        <div className="space-y-4">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-[var(--app-text)]">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-[var(--app-muted)] font-medium">
                    {exp.company} • {exp.type}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--app-accent-subtle)] text-[var(--app-accent)] self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 pt-2 border-t border-[var(--app-border)] text-xs sm:text-sm text-[var(--app-text)] opacity-90">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--app-accent)] shrink-0 mt-2" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Trainings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-[var(--app-text)] flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[var(--app-accent)]" />
            Освіта
          </h2>

          <div className="space-y-3">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-1.5"
              >
                <span className="text-xs font-mono font-semibold text-[var(--app-accent)]">
                  {edu.period}
                </span>
                <h3 className="text-sm font-bold text-[var(--app-text)]">
                  {edu.institution}
                </h3>
                <p className="text-xs text-[var(--app-muted)]">
                  {edu.faculty} {edu.degree && `• ${edu.degree}`}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses and Trainings */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-[var(--app-text)] flex items-center gap-2">
            <Award className="w-5 h-5 text-[var(--app-accent)]" />
            Курси та інтенсиви
          </h2>

          <div className="space-y-3">
            {COURSES_DATA.map((course, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-1"
              >
                <h3 className="text-sm font-bold text-[var(--app-text)]">
                  {course.title}
                </h3>
                <span className="text-xs text-[var(--app-accent)] font-medium">
                  {course.category}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Skills Matrix */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-[var(--app-text)]">
          Навички, скіли
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SKILLS_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-2.5"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--app-accent)]">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs bg-[var(--app-surface)] text-[var(--app-text)] border border-[var(--app-border)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests & Languages */}
      <section className="p-6 sm:p-7 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-4 text-xs sm:text-sm">
        <h2 className="text-base font-bold text-[var(--app-text)] flex items-center gap-2">
          <Heart className="w-4 h-4 text-[var(--app-accent)]" />
          Захоплення, інтереси та мови
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--app-text)] opacity-90 leading-relaxed">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <img src="./extracted/img_19.jpg" alt="Painting" className="w-6 h-6 object-contain rounded-md border border-[var(--app-border)] bg-white dark:bg-neutral-800 p-0.5" />
                <img src="./extracted/img_18.jpg" alt="Tailoring" className="w-6 h-6 object-contain rounded-md border border-[var(--app-border)] bg-white dark:bg-neutral-800 p-0.5" />
              </div>
              <strong className="text-xs uppercase text-[var(--app-accent)] font-semibold">
                Творчість:
              </strong>
            </div>
            <p>{PERSONAL_INFO.interests.creativity}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <img src="./extracted/img_17.jpg" alt="Volleyball" className="w-6 h-6 object-contain rounded-md border border-[var(--app-border)] bg-white dark:bg-neutral-800 p-0.5" />
                <img src="./extracted/img_16.jpg" alt="Skiing" className="w-6 h-6 object-contain rounded-md border border-[var(--app-border)] bg-white dark:bg-neutral-800 p-0.5" />
              </div>
              <strong className="text-xs uppercase text-[var(--app-accent)] font-semibold">
                Спорт & Активність:
              </strong>
            </div>
            <p>{PERSONAL_INFO.interests.sport}</p>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--app-border)] flex items-center gap-4 text-xs">
          <span className="font-semibold text-[var(--app-text)]">Мови:</span>
          {PERSONAL_INFO.languages.map((l, i) => (
            <span key={i} className="text-[var(--app-muted)]">
              {l.name} — <strong className="text-[var(--app-text)]">{l.level}</strong>
            </span>
          ))}
        </div>
      </section>

      {/* Contact Footnote */}
      <div className="p-5 rounded-2xl bg-[var(--app-surface-card)] border border-[var(--app-border)] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4 text-[var(--app-muted)]">
          <span>{PERSONAL_INFO.location}</span>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono hover:text-[var(--app-accent)]">
            {PERSONAL_INFO.phone}
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono hover:text-[var(--app-accent)]">
            {PERSONAL_INFO.email}
          </a>
        </div>
        <span className="text-[11px] font-mono text-[var(--app-muted)]">
          Дата народження: {PERSONAL_INFO.birthday}
        </span>
      </div>
    </div>
  );
}
