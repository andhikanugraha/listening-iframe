import React, { useState } from 'react'
import ListeningIframe from './ListeningIframe'

function App() {
  const [status, setStatus] = useState('pending')

  function onMessage(e) {
    const { data } = e;
    setStatus(data);
  }

  return (
    <div className="container py-4">
      <h2>Parent page</h2>
      <p>Status: {status}</p>
      <hr></hr>
      <div className="border p-4">
        <ListeningIframe src="iframe.html" onMessage={onMessage} width="100%" />
      </div>
    </div>
  )
}

export default App
