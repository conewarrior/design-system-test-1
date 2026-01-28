import { useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';
import { InfoTable } from '../../../components/InfoTable';
import { Toggle } from '../../../components/Toggle';
import { Badge, Card } from '@design-geniefy/ui';

export function ProductDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const productInfoRows = [
    [
      { label: '브랜드명', value: '스타벅스' },
      { label: '상품이미지', value: '[이미지]' },
      { label: '상품명', value: '아이스 아메리카노 Tall' },
    ],
    [
      { label: '기프티쇼 상품id', value: '12345' },
      { label: '상품타입', value: '쿠폰' },
      { label: '상세 상품타입', value: '커피' },
    ],
    [
      { label: '취소 가능 여부', value: 'Y' },
      { label: '연장 가능 여부', value: 'Y' },
      { label: '환불 가능 여부', value: 'Y' },
    ],
    [
      { label: '공급사', value: '스타벅스' },
      { label: '상품 교환 장소', value: '스타벅스' },
      { label: '검색키워드', value: '스타벅스 아메리카노' },
    ],
    [
      { label: '판매가', value: '4,500' },
      { label: '정가', value: '4,500' },
      { label: '사용 유효기한', value: '90일' },
    ],
    [{ label: '판매 종료일', value: '-', colspan: 3 }],
  ];

  return (
    <>
      <PageHeader
        title="상품 상세"
        onBack={() => navigate('/product')}
        badge={<Badge>{id}</Badge>}
      />

      <div
        style={{
          marginTop: 'var(--spacing-4)',
          padding: 'var(--spacing-3)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <span
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-foreground)',
            }}
          >
            노출여부
          </span>
          <Toggle checked={true} onChange={() => {}} />
        </div>
      </div>

      <Card style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-4)' }}>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-3)',
            color: 'var(--color-foreground)',
          }}
        >
          상품 정보
        </h3>
        <InfoTable rows={productInfoRows} />
      </Card>

      <Card style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-4)' }}>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--spacing-3)',
            color: 'var(--color-foreground)',
          }}
        >
          mms 미리보기
        </h3>
        <div
          style={{
            padding: 'var(--spacing-8)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            color: 'var(--color-muted)',
          }}
        >
          MMS 미리보기 영역
        </div>
      </Card>
    </>
  );
}
