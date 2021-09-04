import styles from './StoryPreview.module.scss'
import {useHistory } from 'react-router-dom'

const activeStyle = { fontWeight: 'bold' }

export const StoryPreview = ({
  id = 0,
  title = 'default story title',
  date = 'default current date: ' + Date().toString()
}) => {
  let history = useHistory()
  return(
  <div className={styles.StoryPreview}>
      <h1 style={activeStyle} onClick={() => history.push(`/story/${id}`)}>
        {title}
      </h1>
    <div className={styles.Time}>
      <time dateTime={date}>{date}</time>
    </div>
  </div>
)}
