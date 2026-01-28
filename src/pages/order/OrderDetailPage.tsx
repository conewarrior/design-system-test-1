import { useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';
import { InfoTable } from '../../../components/InfoTable';
import { Button, Badge, Card } from '@design-geniefy/ui';

export function OrderDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const customerInfoRows = [
    [
      { label: '고객id', value: '45678' },
      { label: '고객명', value: '김고객' },
      { label: '이메일', value: 'abc@nate.com' },
      { label: '전화번호', value: '010-0000-0000' },
    ],
  ];

  const paymentInfoRows = [
    [
      { label: '상품ID', value: '23415', colspan: 2 },
      { label: '상품명', value: '아이스 아메리카노 Tall' },
    ],
    [
      { label: '거래요청일시', value: '2025.12.13 13:22', colspan: 2 },
      { label: '거래 처리일시', value: '2025.12.13 13:23' },
    ],
    [
      { label: '결제금액', value: '4,500' },
      { label: '비과세금액', value: '4,500' },
      { label: '과세금액', value: '0' },
    ],
    [
      { label: '거래수단', value: '카드' },
      { label: 'PG사 거래번호', value: 'xxxxxx' },
      { label: 'kt알파 거래번호', value: 'yyyyyyy' },
    ],
  ];

  const recipientInfoRows = [
    [
      { label: '고객id', value: '44565' },
      { label: '고객명', value: '이수신' },
      { label: '이메일', value: 'def@nate.com' },
      { label: '전화번호', value: '010-1111-1111' },
    ],
  ];

  return (
    <>
      <PageHeader
        title="주문 상세"
        onBack={() => navigate('/order')}
        badge={<Badge>{id}</Badge>}
      />

      <div
        style={{
          marginTop: 'var(--spacing-4)',
          display: 'flex',
          gap: 'var(--spacing-4)',
          alignItems: 'center',
          padding: 'var(--spacing-3)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <div>
          <span
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-muted)',
              marginRight: 'var(--spacing-2)',
            }}
          >
            상태
          </span>
          <Badge variant="success">결제완료</Badge>
        </div>
        <div>
          <span
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-muted)',
              marginRight: 'var(--spacing-2)',
            }}
          >
            거래 ID
          </span>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-foreground)' }}>
            2222
          </span>
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
          주문 고객 정보
        </h3>
        <InfoTable rows={customerInfoRows} />
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
          결제정보
        </h3>
        <InfoTable rows={paymentInfoRows} />
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
          수신자 정보
        </h3>
        <InfoTable rows={recipientInfoRows} />
      </Card>

      <div
        style={{
          marginTop: 'var(--spacing-4)',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button variant="destructive" onClick={() => navigate(`/order/${id}/refund`)}>
          환불하기
        </Button>
      </div>
    </>
  );
}
