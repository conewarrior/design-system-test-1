import { Blockquote } from '../components/Blockquote'
import { Table } from '../components/Table'

const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: 'var(--spacing-4)',
  fontFamily: 'system-ui, sans-serif',
}

const headingStyles = {
  color: 'var(--color-foreground)',
  marginBottom: 'var(--spacing-3)',
}

const sectionStyles = {
  marginBottom: 'var(--spacing-4)',
}

const labelStyles = {
  display: 'block',
  marginBottom: 'var(--spacing-1)',
  color: 'var(--color-muted)',
  fontSize: '0.875rem',
}

// Sample data for Table
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const users: User[] = [
  { id: 'USR-001', name: 'Kim Hyunseok', email: 'kim@example.com', role: 'Admin', status: 'Active' },
  { id: 'USR-002', name: 'Lee Jihye', email: 'lee@example.com', role: 'Editor', status: 'Active' },
  { id: 'USR-003', name: 'Park Minho', email: 'park@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 'USR-004', name: 'Choi Soojin', email: 'choi@example.com', role: 'Editor', status: 'Active' },
]

const columns = [
  { key: 'id' as const, header: 'ID', nowrap: true },
  { key: 'name' as const, header: 'Name' },
  { key: 'email' as const, header: 'Email' },
  { key: 'role' as const, header: 'Role', nowrap: true },
  { key: 'status' as const, header: 'Status', nowrap: true },
]

function App() {
  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Component Test</h1>

      <h2 style={{ ...headingStyles, fontSize: 'var(--font-size-lg)' }}>Table (Minimal Style)</h2>
      <section style={sectionStyles}>
        <Table
          columns={columns}
          data={users}
          onRowClick={(row) => console.log('Clicked:', row)}
        />
      </section>

      <h2 style={{ ...headingStyles, fontSize: 'var(--font-size-lg)' }}>Blockquote</h2>

      <section style={sectionStyles}>
        <span style={labelStyles}>Default variant</span>
        <Blockquote>
          디자인 시스템은 일관된 사용자 경험을 제공하기 위한 핵심 도구입니다.
        </Blockquote>
      </section>

      <section style={sectionStyles}>
        <span style={labelStyles}>Default with cite</span>
        <Blockquote cite="Steve Jobs">
          Design is not just what it looks like and feels like. Design is how it works.
        </Blockquote>
      </section>

      <section style={sectionStyles}>
        <span style={labelStyles}>Accent variant</span>
        <Blockquote variant="accent">
          토큰 기반 디자인은 확장성과 유지보수성을 높여줍니다.
        </Blockquote>
      </section>

      <section style={sectionStyles}>
        <span style={labelStyles}>Accent with cite</span>
        <Blockquote variant="accent" cite="Design Geniefy">
          모든 색상, 간격, radius는 tokens.css의 CSS 변수를 사용합니다.
        </Blockquote>
      </section>
    </div>
  )
}

export default App
