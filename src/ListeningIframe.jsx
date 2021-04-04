import React, { useState, useEffect } from 'react'

// Security note: onMessage should check the origin of the message
function ListeningIframe({ onMessage, src, ...args }) {
  const [status, setStatus] = useState('pending')

  useEffect(() => {
    // add event listener
    window.addEventListener('message', onMessage);

    return function cleanup() {
      window.removeEventListener('message', onMessage);
    }
  });

  return (
    <iframe src={src} {...args}></iframe>
  )
}

export default ListeningIframe
