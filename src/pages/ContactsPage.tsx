import { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Calendar, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface ContactsPageProps {
  onNavigate: (page: PageId) => void;
}

export function ContactsPage({ onNavigate }: ContactsPageProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '3d',
    message: '',
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-[var(--app-border)] pb-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--app-accent)]">
            СТОРІНКА 09 • ВІЗИТІВКА ТА ЗВ’ЯЗОК
          </span>
          <span className="text-xs font-mono text-[var(--app-muted)]">
            Доступна для замовлень
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--app-text)] uppercase">
          КОНТАКТИ
        </h1>

        <p className="text-sm sm:text-base text-[var(--app-muted)] leading-relaxed pt-2 max-w-2xl">
          Буду рада обговорити ваш проєкт з 3D-візуалізації, айдентики, інтер’єру або сезонної декорації простору. Зв’яжіться зі мною будь-яким зручним для вас способом:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Direct Contacts Card */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--app-accent)] block mb-1">
                Візитівка дизайнера
              </span>
              <h2 className="text-xl font-bold text-[var(--app-text)]">
                {PERSONAL_INFO.fullName}
              </h2>
              <span className="text-xs text-[var(--app-muted)]">
                ({PERSONAL_INFO.preferredName}) • {PERSONAL_INFO.tagline}
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Phone */}
              <div className="p-3.5 rounded-2xl bg-[var(--app-surface)] border border-[var(--app-border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[var(--app-accent-subtle)] text-[var(--app-accent)]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[var(--app-muted)] uppercase">Телефон:</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono font-bold text-[var(--app-text)] hover:text-[var(--app-accent)]">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 rounded-lg text-[var(--app-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]"
                  title="Скопіювати"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-[var(--app-surface)] border border-[var(--app-border)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[var(--app-accent-subtle)] text-[var(--app-accent)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[var(--app-muted)] uppercase">Email:</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono font-bold text-[var(--app-text)] hover:text-[var(--app-accent)] truncate block max-w-[160px] sm:max-w-none">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 rounded-lg text-[var(--app-muted)] hover:text-[var(--app-text)] hover:bg-[var(--app-surface-hover)]"
                  title="Скопіювати"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-2xl bg-[var(--app-surface)] border border-[var(--app-border)] flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[var(--app-accent-subtle)] text-[var(--app-accent)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-[var(--app-muted)] uppercase">Локація:</span>
                  <span className="font-medium text-[var(--app-text)]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Birthday */}
              <div className="p-3.5 rounded-2xl bg-[var(--app-surface)] border border-[var(--app-border)] flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[var(--app-accent-subtle)] text-[var(--app-accent)]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-[var(--app-muted)] uppercase">Дата народження:</span>
                  <span className="font-mono font-medium text-[var(--app-text)]">
                    {PERSONAL_INFO.birthday}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--app-surface-card)] border border-[var(--app-border)] space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--app-accent)] block mb-1">
                Швидке повідомлення
              </span>
              <h2 className="text-xl font-bold text-[var(--app-text)]">
                Надіслати запит на дизайн
              </h2>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-emerald-900 dark:text-emerald-200">
                  Дякую за повідомлення!
                </h3>
                <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
                  Я зв’яжуся з вами найближчим часом через вказаний контакт.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold underline text-emerald-700 dark:text-emerald-300 pt-2"
                >
                  Надіслати ще одне повідомлення
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1 text-[var(--app-text)]">
                    Ваше ім’я або компанія:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Наприклад: Олена або Студія Квітів"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] focus:border-[var(--app-accent)] focus:outline-none text-[var(--app-text)] text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-[var(--app-text)]">
                    Телефон, Email або Telegram:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+38 0XX XXX XX XX або @username"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] focus:border-[var(--app-accent)] focus:outline-none text-[var(--app-text)] text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-[var(--app-text)]">
                    Напрямок проєкту:
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] focus:border-[var(--app-accent)] focus:outline-none text-[var(--app-text)] text-xs transition-colors"
                  >
                    <option value="3d">3D-моделювання та візуалізація інтер’єру</option>
                    <option value="identity">Логотип та фірмовий стиль (Identity)</option>
                    <option value="commercial">Комерційна графіка / Реклама</option>
                    <option value="editorial">Багатосторінкові видання / Каталог</option>
                    <option value="uiux">UI/UX Дизайн інтерфейсу</option>
                    <option value="decor">Декорація комерційного простору / Фотозона</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-[var(--app-text)]">
                    Опишіть завдання:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Коротко про проєкт, строки та побажання..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--app-surface)] border border-[var(--app-border)] focus:border-[var(--app-accent)] focus:outline-none text-[var(--app-text)] text-xs transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[var(--app-accent)] text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Відправити запит</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--app-border)]">
        <button
          onClick={() => onNavigate('decor')}
          className="text-xs font-semibold text-[var(--app-muted)] hover:text-[var(--app-text)] flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Назад: Декорація закладів
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="text-xs font-semibold text-[var(--app-accent)] hover:underline flex items-center gap-1.5"
        >
          Повернутися на Головну сторінку
        </button>
      </div>
    </div>
  );
}
