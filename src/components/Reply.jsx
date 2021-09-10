import { Avatar, Grid } from '@mui/material'

export const Reply = ({ reply }) => {
  return (
    <Grid justifyContent='left' item xs zeroMinWidth>
      <Grid item>
        <Avatar alt='Avatar Placeholder' />
      </Grid>
      <h4 style={{ margin: 0, textAlign: 'left' }}>{reply.by}</h4>
      <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: reply.text }} />
      <p style={{ textAlign: 'left', color: 'gray' }}>posted {new Date(reply.time).toString()}</p>
    </Grid>
  )
}
