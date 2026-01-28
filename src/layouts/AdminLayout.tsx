import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AdminLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { path: '/category', label: '카테고리' },
  { path: '/decoration', label: '선물꾸미기' },
  { path: '/product', label: '상품' },
  { path: '/order', label: '주문' },
  { path: '/banned-keyword', label: '금칙어 관리' },
];

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--color-background)',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: '240px',
          height: '100vh',
          position: 'sticky',
          top: 0,
          background: 'var(--color-bg-surface)',
          borderRight: '1px solid var(--color-border)',
          padding: 'var(--spacing-4)',
          overflowY: 'auto',
        }}
      >
        <h2
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-4)',
            color: 'var(--color-foreground)',
          }}
        >
          관리자
        </h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <li key={item.path} style={{ marginBottom: 'var(--spacing-1)' }}>
                  <Link
                    to={item.path}
                    style={{
                      display: 'block',
                      padding: 'var(--spacing-2)',
                      borderRadius: 'var(--radius-md)',
                      background: isActive
                        ? 'var(--color-primary-bg)'
                        : 'transparent',
                      color: isActive
                        ? 'var(--color-primary)'
                        : 'var(--color-foreground)',
                      textDecoration: 'none',
                      fontSize: 'var(--font-size-sm)',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background =
                          'var(--color-bg-surface-hover)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: 'var(--spacing-6)',
          maxWidth: '1400px',
        }}
      >
        {children}
      </main>
    </div>
  );
}
