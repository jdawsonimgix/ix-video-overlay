import VideoJS from './VideoJS'

import './App.css'
// DELETE VIDEO BEFORE PUSH
function App() {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    width: '500px',
    sources: [
      {
        src:
          'https://assets.imgix.video/videos/girl-reading-book-in-library.mp4?fm=mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <div className="App">
      <header className="App-header">
        <VideoJS options={videoJsOptions} />
      </header>
    </div>
  )
}

export default App

//   'https://assets.imgix.video/videos/girl-reading-book-in-library.mp4',
