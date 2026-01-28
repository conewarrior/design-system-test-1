import { useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';
import { FormField } from '../../../components/FormField';
import { InfoTable } from '../../../components/InfoTable';
import { Button, Input, Select, Card } from '@design-geniefy/ui';

export function RefundPage() {
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

  const productInfoRows = [
    [
      { label: '상품명', value: '아이스 아메리카노 Tall' },
      { label: '결제금액', value: '4,500' },
      { label: '결제수단', value: '카드' },
    ],
  ];

  return (
    <>
      <PageHeader title="환불 거래 생성" onBack={() => navigate(`/order/${id}`)} />

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
          환불 상품
        </h3>
        <InfoTable rows={productInfoRows} />
      </Card>

      <Card style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-4)' }}>
        <FormField label="환불 사유" required>
          <Input placeholder="환불 사유를 입력하세요 (최대 20자)" maxLength={20} />
        </FormField>
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
          가상 계좌 환불
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <FormField label="은행명" required>
            <Select>
              <option value="">선택</option>
              <option value="kb">KB국민은행</option>
              <option value="shinhan">신한은행</option>
              <option value="woori">우리은행</option>
            </Select>
          </FormField>
          <FormField label="계좌번호" required>
            <Input placeholder="계좌번호" />
          </FormField>
          <FormField label="예금주명" required>
            <Input placeholder="예금주명" />
          </FormField>
        </div>
      </Card>

      <div
        style={{
          marginTop: 'var(--spacing-4)',
          display: 'flex',
          gap: 'var(--spacing-2)',
          justifyContent: 'flex-end',
        }}
      >
        <Button variant="outline" onClick={() => navigate(`/order/${id}`)}>
          취소
        </Button>
        <Button variant="destructive">환불하기</Button>
      </div>
    </>
  );
}
