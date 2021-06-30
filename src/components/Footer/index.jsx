import React, { useState } from 'react'
import { useContextDispatch } from "../../context";
import { postMessage } from '../../api'
import { sentMessage } from '../../actions';

export default function Footer() {
  const [message, setMessage] = useState('')
  const dispatch = useContextDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      message,
      author: 'alex'
    }
    postMessage(data).then(({data}) => {
      dispatch(sentMessage(data))
      window.scrollTo(0,document.body.scrollHeight);
    })
    setMessage('')
  }
  return (
    <footer className='footer'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          className='message-input'
          placeholder='Message'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='btn-submit' type="submit">Send</button>
      </form>
    </footer>
  )
}
