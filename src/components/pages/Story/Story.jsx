import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { Content } from '../../views/Content/Content'
import { useHistory } from 'react-router-dom'

export const Story = () => {
  let history = useHistory()
  const returnToNews = () => {
    history.push('/news')
  }
  return (
    <Layout layoutStyle='blog'>
      <Header />
      <button onClick={returnToNews}>Return to news</button>
      <Content></Content>
    </Layout>
  )
}
