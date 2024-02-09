import { Layout } from 'antd'
import { ContentBody } from './components'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout>
      <Header>ヘッダー</Header>
      <Content
        style={{ padding: '50px', margin: '20px', backgroundColor: 'white' }}
      >
        <ContentBody />
      </Content>
      <Footer>フッター</Footer>
    </Layout>
  )
}

export default App
