import Link from 'next/link';
import { getRestaurantContent } from '@/lib/content';
import { getMessages, normalizeLocale, withLocale } from '@/lib/i18n';

function themeFromSlug(slug: string) {
  const seeds = ['#e2402b', '#6b4eff', '#14836c', '#f5a623', '#b5854a', '#6b2fb8'];
  const index = Math.abs(slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % seeds.length;
  return seeds[index];
}

export default function RestaurantPage({
  params,
  searchParams,
}: {
  params: { restaurantSlug: string };
  searchParams?: { lang?: string };
}) {
  const accent = themeFromSlug(params.restaurantSlug);
  const locale = normalizeLocale(searchParams?.lang);
  const messages = getMessages(locale);
  const content = getRestaurantContent(locale);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', padding: 24 }}>
      <div className="page">
        <div style={{ padding: '18px 0 32px' }}>
          <Link href={withLocale('/', locale)} className="pill">
            ← {messages.restaurant.backToHome}
          </Link>
        </div>

        <section
          className="hero"
          style={{
            minHeight: 320,
            background: `linear-gradient(135deg, rgba(18,18,18,.92), rgba(18,18,18,.7)), radial-gradient(circle at 20% 20%, ${accent}33, transparent 32%), #171411`,
          }}
        >
          <div className="hero-content">
            <span className="eyebrow">{messages.restaurant.eyebrow}</span>
            <h1>{params.restaurantSlug}</h1>
            <p>{messages.restaurant.description}</p>
            <div className="filters">
              {messages.restaurant.tabs.map((tab, index) => (
                <span key={tab} className={`filter${index === 0 ? ' active' : ''}`}>
                  {tab}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <h2>{messages.restaurant.sectionTitle}</h2>
              <div style={{ color: 'var(--muted)', marginTop: 6 }}>{messages.restaurant.sectionHint}</div>
            </div>
          </div>

          <div className="card-grid">
            {content.branches.map((branch, index) => (
              <Link
                key={branch}
                href={withLocale(`/${params.restaurantSlug}/${branch.toLowerCase()}`, locale)}
                className="brand-card"
                style={{ borderBottom: `5px solid ${accent}`, minHeight: 210 }}
              >
                <div
                  className="brand-badge"
                  style={{
                    width: 78,
                    height: 78,
                    marginTop: 24,
                    background: `linear-gradient(135deg, ${accent}, color-mix(in srgb, ${accent} 70%, #fff))`,
                  }}
                >
                  {index + 1}
                </div>
                <h3>
                  {branch} {content.branchSuffix}
                </h3>
                <p>{content.branchDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
