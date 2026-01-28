import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';
import { SearchFilter } from '../../../components/SearchFilter';
import { Table } from '../../../components/Table';
import { Button, Select, Input, Checkbox, Modal } from '@design-geniefy/ui';

const mockData = [
  {
    id: 1112,
    type: '배너',
    category: '기본',
    image: '[img]',
    title: '네이트온(기본)',
    isDefault: 'Y',
    isActive: '사용',
    createdAt: '2025.12.22',
    updatedAt: '2025.12.22',
  },
  {
    id: 1111,
    type: '배너',
    category: '시즌',
    image: '[img]',
    title: '크리스마스',
    isDefault: '-',
    isActive: '사용',
    createdAt: '2025.12.26',
    updatedAt: '2025.12.26',
  },
];

export function DecorationListPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { key: 'id' as const, header: 'ID', align: 'left' as const, nowrap: true },
    { key: 'type' as const, header: '구분', align: 'left' as const },
    { key: 'category' as const, header: '카테고리', align: 'left' as const },
    { key: 'image' as const, header: '이미지', align: 'center' as const },
    { key: 'title' as const, header: '제목', align: 'left' as const },
    { key: 'isDefault' as const, header: '기본값', align: 'center' as const },
    { key: 'isActive' as const, header: '사용여부', align: 'left' as const },
    { key: 'createdAt' as const, header: '등록일시', align: 'left' as const, nowrap: true },
    { key: 'updatedAt' as const, header: '업데이트일시', align: 'left' as const, nowrap: true },
  ];

  return (
    <>
      <PageHeader title="선물 꾸미기" />

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <SearchFilter onReset={() => {}} onSearch={() => {}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              사용여부
            </label>
            <Select value="all" onChange={() => {}}>
              <option value="all">전체</option>
              <option value="active">사용</option>
              <option value="inactive">미사용</option>
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              구분
            </label>
            <Select value="all" onChange={() => {}}>
              <option value="all">전체</option>
              <option value="banner">배너</option>
              <option value="template">템플릿</option>
            </Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <label style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
              제목
            </label>
            <Input placeholder="제목" />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Checkbox label="기본값만 보기" />
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
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          카테고리 등록
        </Button>
        <Button variant="primary" onClick={() => navigate('/decoration/create')}>
          배너/템플릿 등록
        </Button>
      </div>

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <Table
          columns={columns}
          data={mockData}
          onRowClick={(row) => navigate(`/decoration/${row.id}`)}
        />
      </div>

      {/* 카테고리 관리 모달 */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="배너/템플릿 카테고리 관리"
      >
        <div style={{ padding: 'var(--spacing-4)' }}>
          <p style={{ color: 'var(--color-muted)' }}>카테고리 관리 - 조회 모드</p>
        </div>
      </Modal>
    </>
  );
}
