import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';
import { SearchFilter } from '../../../components/SearchFilter';
import { Table } from '../../../components/Table';
import { Toggle } from '../../../components/Toggle';
import { Button, Select, Input, Badge } from '@design-geniefy/ui';

const mockData = [
  {
    id: 23415,
    brandName: '스타벅스',
    productName: '아이스 아메리카노',
    status: '정상',
    productType: '쿠폰',
    sellingPrice: '4,500',
    createdAt: '12.13 13:22',
    updatedAt: '12.13 13:22',
    isVisible: true,
  },
  {
    id: 23416,
    brandName: '맥도날드',
    productName: '빅맥세트',
    status: '정상',
    productType: '쿠폰',
    sellingPrice: '8,900',
    createdAt: '12.14 10:00',
    updatedAt: '12.14 10:00',
    isVisible: false,
  },
];

export function ProductListPage() {
  const navigate = useNavigate();

  const columns = [
    { key: 'checkbox' as const, header: '', align: 'center' as const },
    { key: 'id' as const, header: '상품ID', align: 'left' as const, nowrap: true },
    { key: 'brandName' as const, header: '브랜드명', align: 'left' as const },
    { key: 'productName' as const, header: '상품명', align: 'left' as const },
    { key: 'status' as const, header: '상태', align: 'left' as const },
    { key: 'productType' as const, header: '상품타입', align: 'left' as const },
    { key: 'sellingPrice' as const, header: '판매가', align: 'right' as const, nowrap: true },
    { key: 'createdAt' as const, header: '등록일시', align: 'left' as const, nowrap: true },
    { key: 'updatedAt' as const, header: '업데이트일시', align: 'left' as const, nowrap: true },
    { key: 'isVisible' as const, header: '노출여부', align: 'center' as const },
  ];

  const data = mockData.map((item) => ({
    checkbox: <input type="checkbox" />,
    id: item.id,
    brandName: item.brandName,
    productName: item.productName,
    status: <Badge variant={item.status === '정상' ? 'success' : 'default'}>{item.status}</Badge>,
    productType: item.productType,
    sellingPrice: item.sellingPrice,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    isVisible: <Toggle checked={item.isVisible} onChange={() => {}} />,
  }));

  return (
    <>
      <PageHeader title="상품" />

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <SearchFilter onReset={() => {}} onSearch={() => {}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              상태
            </label>
            <Select value="all">
              <option value="all">전체</option>
              <option value="normal">정상</option>
              <option value="soldout">품절</option>
              <option value="stopped">판매중지</option>
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              노출여부
            </label>
            <Select value="all">
              <option value="all">전체</option>
              <option value="visible">노출</option>
              <option value="hidden">미노출</option>
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              상품id
            </label>
            <Input placeholder="상품id" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              상품명
            </label>
            <Input placeholder="상품명" />
          </div>
        </SearchFilter>
      </div>

      <div
        style={{
          marginTop: 'var(--spacing-4)',
          display: 'flex',
          gap: 'var(--spacing-2)',
          justifyContent: 'flex-end',
        }}
      >
        <Button variant="primary">상품 동기화</Button>
        <Button variant="outline">엑셀 다운로드</Button>
      </div>

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <Table columns={columns} data={data} onRowClick={(row) => navigate(`/product/${row.id}`)} />
      </div>
    </>
  );
}
