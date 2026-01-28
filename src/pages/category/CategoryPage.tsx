import { useState } from 'react';
import { PageHeader } from '../../../components/PageHeader';
import { SearchFilter } from '../../../components/SearchFilter';
import { Table } from '../../../components/Table';
import { Toggle } from '../../../components/Toggle';
import { Button, Select, Input, Modal } from '@design-geniefy/ui';

const mockData = [
  {
    id: 1112,
    ktCategory: '도서',
    displayCategory: '선택',
    isVisible: false,
  },
  {
    id: 1111,
    ktCategory: '버거',
    displayCategory: '버거',
    isVisible: true,
  },
  {
    id: 1110,
    ktCategory: '올레',
    displayCategory: '선택',
    isVisible: false,
  },
];

export function CategoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'id' as const, header: 'ID', align: 'left' as const, nowrap: true },
    { key: 'ktCategory' as const, header: 'KT 알파 카테고리', align: 'left' as const },
    { key: 'displayCategory' as const, header: '전시 카테고리', align: 'left' as const },
    { key: 'isVisible' as const, header: '노출여부', align: 'left' as const },
  ];

  const data = mockData.map((item) => ({
    id: item.id,
    ktCategory: item.ktCategory,
    displayCategory: (
      <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
        {item.displayCategory}
        <Button variant="outline" size="sm">
          수정
        </Button>
      </div>
    ),
    isVisible: <Toggle checked={item.isVisible} onChange={() => {}} />,
  }));

  return (
    <>
      <PageHeader title="카테고리" />

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <SearchFilter onReset={() => {}} onSearch={() => {}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              노출여부
            </label>
            <Select value="all" onChange={() => {}}>
              <option value="all">전체</option>
              <option value="visible">노출</option>
              <option value="hidden">미노출</option>
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              KT 카테고리
            </label>
            <Input placeholder="KT 카테고리명" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              전시 카테고리
            </label>
            <Input placeholder="전시 카테고리명" />
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
        <Button variant="primary">카테고리 동기화</Button>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          전시 카테고리 관리
        </Button>
        <Button variant="outline">엑셀 다운로드</Button>
      </div>

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <Table columns={columns} data={data} onRowClick={() => {}} />
      </div>

      {/* 전시 카테고리 관리 모달 */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="전시 카테고리 관리">
        <div style={{ padding: 'var(--spacing-4)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            <span style={{ color: 'var(--color-muted)' }}>총 5개</span>
            <Button variant="outline" size="sm">
              편집
            </Button>
          </div>
          <p style={{ color: 'var(--color-muted)' }}>조회 모드 - 카테고리 목록</p>
        </div>
      </Modal>
    </>
  );
}
