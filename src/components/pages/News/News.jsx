import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'

import { Content } from '../../views/Content/Content'
import { Feed } from '../../views/Feed/Feed'
import { StoryPreview } from '../../views/Feed/StoryPreview/StoryPreview'

export const News = () => (
  <Layout layoutStyle='blog'>
    <Header />
    <Content>
      <Feed>
        <StoryPreview title={'sample story 1'} date={'01.05.2021'}>
        </StoryPreview>
        <StoryPreview title={'sample story 2'} date={'02.05.2021'}>
        </StoryPreview>
        <StoryPreview title={'sample story 3'} date={'03.05.2021'}>
        </StoryPreview>
      </Feed>
    </Content>
  </Layout>
)
