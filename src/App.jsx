import './App.css'
import posts from './app/utils/fetchPosts'

export const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hacker News</h1>
      </header>
      {posts.map(
        post =>
          post !== null && (
            <div
              key={post.id}
              style={{ border: '1px solid black', margin: '5px' }}>
              {post.title}
            </div>
          )
      )}
    </div>
  )
}
