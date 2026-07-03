import Link from 'next/link';

function themeFromSlug(slug: string) {
  const seeds = ['#e2402b', '#6b4eff', '#14836c', '#f5a623', '#b5854a', '#6b2fb8'];
  const index = Math.abs(slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % seeds.length;
  return seeds[index];
}

export default function BranchPage({
  params,
}: {
  params: { restaurantSlug: string; branchSlug: string };
}) {
  const accent = themeFromSlug(params.restaurantSlug);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', padding: 24 }}>
      <div className="page">
        <div style={{ padding: '18px 0 24px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href={`/${params.restaurantSlug}`} className="pill">
            ← Marka
          </Link>
          <Link href="/" className="pill">
            Ana sayfa
          </Link>
        </div>

        <section className="hero" style={{ minHeight: 300, background: `linear-gradient(135deg, rgba(18,18,18,.94), rgba(18,18,18,.72)), radial-gradient(circle at 20% 20%, ${accent}33, transparent 32%), #171411` }}>
          <div className="hero-content">
            <span className="eyebrow">Şube menüsü</span>
            <h1>{params.branchSlug}</h1>
            <p>Burada kampanya barı, popup kampanyalar, kategori sekmeleri ve ürün kartları gösterilecek.</p>
            <div className="filters">
              <span className="filter active">Günün Menüsü</span>
              <span className="filter">Kampanyalar</span>
              <span className="filter">Tüm Ürünler</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="empty">
            Bu sayfa, gerçek menü verisi bağlandığında ürünleri, kategorileri ve kampanya akışını gösterecek.
          </div>
        </section>
      </div>
    </main>
  );
}
