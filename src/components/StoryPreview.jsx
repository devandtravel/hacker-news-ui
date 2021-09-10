import { useHistory } from 'react-router-dom'

export const StoryPreview = ({ story = story }) => {
  let history = useHistory()

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() =>
        history.push({
          pathname: `/story/${story.id}`,
          story
        })
      }>
      <h1 style={{ fontWeight: 'bold' }} pointer='true'>
        {story.title}
      </h1>
      <p>Author: {story.by}</p>
      <p>Score: {story.score}</p>
      <small style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <time dateTime={Date(story.time).toString()}>{Date(story.time).toString()}</time>
      </small>
    </div>
  )
}
