import Link from 'next/link';
import { getMessages, normalizeLocale, withLocale } from '@/lib/i18n';

function themeFromSlug(slug: string) {
  const seeds = ['#e2402b', '#6b4eff', '#14836c', '#f5a623', '#b5854a', '#6b2fb8'];
  const index = Math.abs(slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % seeds.length;
  return seeds[index];
}

export default function BranchPage({
  params,
  searchParams,
}: {
  params: { restaurantSlug: string; branchSlug: string };
  searchParams?: { lang?: string };
}) {
  const accent = themeFromSlug(params.restaurantSlug);
  const locale = normalizeLocale(searchParams?.lang);
  const messages = getMessages(locale);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', padding: 24 }}>
      <div className="page">
        <div style={{ padding: '18px 0 24px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href={withLocale(`/${params.restaurantSlug}`, locale)} className="pill">
            ← {messages.branch.backToBrand}
          </Link>
          <Link href={withLocale('/', locale)} className="pill">
            {messages.branch.backToHome}
          </Link>
        </div>

        <section
          className="hero"
          style={{
            minHeight: 300,
            background: `linear-gradient(135deg, rgba(18,18,18,.94), rgba(18,18,18,.72)), radial-gradient(circle at 20% 20%, ${accent}33, transparent 32%), #171411`,
          }}
        >
          <div className="hero-content">
            <span className="eyebrow">{messages.branch.eyebrow}</span>
            <h1>{params.branchSlug}</h1>
            <p>{messages.branch.description}</p>
            <div className="filters">
              {messages.branch.tabs.map((tab, index) => (
                <span key={tab} className={`filter${index === 0 ? ' active' : ''}`}>
                  {tab}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="empty">{messages.branch.empty}</div>
        </section>
      </div>
    </main>
  );
}
