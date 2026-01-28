import { PageHeader } from '../../../components/PageHeader';

export function BannedKeywordPage() {
  return (
    <>
      <PageHeader title="금칙어 관리" />

      <div
        style={{
          marginTop: 'var(--spacing-8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
        }}
      >
        <p
          style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-muted)',
          }}
        >
          준비 중입니다.
        </p>
      </div>
    </>
  );
}
