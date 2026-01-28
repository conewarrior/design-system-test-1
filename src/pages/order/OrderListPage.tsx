import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';
import { SearchFilter } from '../../../components/SearchFilter';
import { DateRangePicker } from '../../../components/DateRangePicker';
import { Table } from '../../../components/Table';
import { Button, Select, Input, Badge } from '@design-geniefy/ui';

const mockData = [
  {
    id: 12345,
    status: '결제완료',
    productId: 2222,
    productName: '아이스 아메리카노',
    userId: 'K11462',
    paymentMethod: '카드',
    paymentAmount: '4,500',
    requestedAt: '12.13 13:22',
    processedAt: '12.13 13:22',
  },
  {
    id: 12346,
    status: '환불완료',
    productId: 2223,
    productName: '빅맥세트',
    userId: 'K11463',
    paymentMethod: '카드',
    paymentAmount: '8,900',
    requestedAt: '12.14 10:00',
    processedAt: '12.14 10:05',
  },
];

export function OrderListPage() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('2025-12-01');
  const [endDate, setEndDate] = useState('2025-12-31');

  const columns = [
    { key: 'id' as const, header: '주문ID', align: 'left' as const, nowrap: true },
    { key: 'status' as const, header: '상태', align: 'left' as const },
    { key: 'productId' as const, header: '상품ID', align: 'left' as const, nowrap: true },
    { key: 'productName' as const, header: '상품명', align: 'left' as const },
    { key: 'userId' as const, header: '유저ID', align: 'left' as const, nowrap: true },
    { key: 'paymentMethod' as const, header: '결제수단', align: 'left' as const },
    { key: 'paymentAmount' as const, header: '결제금액', align: 'right' as const, nowrap: true },
    { key: 'requestedAt' as const, header: '거래요청', align: 'left' as const, nowrap: true },
    { key: 'processedAt' as const, header: '거래처리', align: 'left' as const, nowrap: true },
  ];

  const data = mockData.map((item) => ({
    ...item,
    status: (
      <Badge
        variant={
          item.status === '결제완료'
            ? 'success'
            : item.status === '환불완료'
              ? 'info'
              : 'default'
        }
      >
        {item.status}
      </Badge>
    ),
  }));

  return (
    <>
      <PageHeader title="주문" />

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <SearchFilter onReset={() => {}} onSearch={() => {}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              상태
            </label>
            <Select value="all">
              <option value="all">전체</option>
              <option value="waiting">대기</option>
              <option value="completed">결제완료</option>
              <option value="cancelled">결제취소</option>
              <option value="refunded">환불완료</option>
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              주문id
            </label>
            <Input placeholder="주문id" />
          </div>
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-1)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
              <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
                거래ID 타입
              </label>
              <Select value="transaction">
                <option value="transaction">거래id</option>
                <option value="pg">PG사 거래번호</option>
                <option value="kt">기프티쇼 거래번호</option>
              </Select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
              <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
                거래ID
              </label>
              <Input placeholder="거래ID" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              상품id
            </label>
            <Input placeholder="상품id" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              유저id
            </label>
            <Input placeholder="유저id" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              거래일시
            </label>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
            />
          </div>
        </SearchFilter>
      </div>

      <div
        style={{
          marginTop: 'var(--spacing-4)',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button variant="outline">엑셀 다운로드</Button>
      </div>

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <Table columns={columns} data={data} onRowClick={(row) => navigate(`/order/${row.id}`)} />
      </div>
    </>
  );
}
