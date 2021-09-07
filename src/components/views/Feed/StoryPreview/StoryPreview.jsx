import styles from './StoryPreview.module.scss'
import { useHistory } from 'react-router-dom'

const activeStyle = { fontWeight: 'bold' }

export const StoryPreview = ({
  story = story,
  index = index,
  id = 0,
  title = 'default story title',
  author = 'default Author',
  score = 0,
  date = 'default current date: ' + Date().toString()
}) => {
  let history = useHistory()

  return (
    <div
      className={styles.StoryPreview}
      onClick={() =>
        history.push({
          pathname: `/story/${id}`,
          story
        })
      }>
      <h1 style={activeStyle} pointer='true'>
        {`${index + 1}. ${title}`}
      </h1>
      <p>Author: {author}</p>
      <p>Score: {score}</p>
      <small className={styles.Time}>
        <time dateTime={date}>{date}</time>
      </small>
    </div>
  )
}
