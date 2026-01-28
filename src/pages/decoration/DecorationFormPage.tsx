import { useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from '../../../components/PageHeader';
import { FormField } from '../../../components/FormField';
import { ImageUpload } from '../../../components/ImageUpload';
import { Button, Select, Input, Checkbox, Radio, Card } from '@design-geniefy/ui';

export function DecorationFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  return (
    <>
      <PageHeader
        title={isEdit ? '배너/템플릿 수정' : '배너/템플릿 등록'}
        onBack={() => navigate('/decoration')}
      />

      <Card style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-6)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
            <FormField label="구분" required>
              <Select>
                <option value="">선택</option>
                <option value="banner">배너</option>
                <option value="template">템플릿</option>
              </Select>
            </FormField>
            <FormField label="카테고리" required>
              <Select>
                <option value="">선택</option>
                <option value="basic">기본</option>
                <option value="season">시즌</option>
              </Select>
            </FormField>
          </div>

          <FormField label="제목(관리용)" required>
            <Input placeholder="관리용 제목을 입력하세요" />
          </FormField>

          <div>
            <FormField label="이미지" required>
              <ImageUpload
                onChange={() => {}}
                guidanceText="※ 권장 사이즈: 1200x600px"
              />
            </FormField>
          </div>

          <div>
            <Checkbox label="기본값으로 노출" />
          </div>

          <FormField label="사용여부">
            <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
              <Radio name="isActive" label="사용" checked />
              <Radio name="isActive" label="미사용" />
            </div>
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
        <Button variant="outline" onClick={() => navigate('/decoration')}>
          취소
        </Button>
        <Button variant="primary">저장</Button>
      </div>
    </>
  );
}
