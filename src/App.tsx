import { Layout } from 'antd'
import { ContentBody } from './components'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout>
      <Header style={{ color: '#fff', fontSize: 24 }}>SmaB-random</Header>
      <Content
        style={{ padding: '12px', margin: '12px', backgroundColor: 'white' }}
      >
        <ContentBody />
      </Content>
      <Footer>
        created by <a href="https://github.com/foolproof-htb">foolproof-htb</a>
      </Footer>
    </Layout>
  )
}

export default App
