import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'


export const Story = ({post = {}}) => {
  return (
    <Layout layoutStyle='blog'>
      <Header isRefreshButton={false} />

    </Layout>
  )
}
