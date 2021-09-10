import { List, Link, ListItem, Paper } from '@mui/material'

const keysWidth = { width: '20%' }

export const StoryDetails = ({ story }) => {
  return (
    <>
      <h2 style={{ marginLeft: '1vh' }}>Story Details</h2>
      <Paper>
        <List>
          <ListItem>
            <Link href={`${story.url && story.url}`} target='_blank' rel='noopener'>
              Link to source
            </Link>
          </ListItem>
          <ListItem>
            <div style={keysWidth}>Title</div>
            <div>{`${story.title && story.title}`}</div>
          </ListItem>
          <ListItem>
            <div style={keysWidth}>Time</div>
            <div>{`${Date(story.time).toString() && Date(story.time).toString()}`}</div>
          </ListItem>
          <ListItem>
            <div style={keysWidth}>Author</div>
            <div>{`${story.by && story.by}`}</div>
          </ListItem>
          <ListItem>
            <div style={keysWidth}>Number of comments</div>
            <div>{`${story.kids ? story.kids.length : 0}`}</div>
          </ListItem>
        </List>
      </Paper>
    </>
  )
}
