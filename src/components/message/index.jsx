import React from 'react'
import { useContextState } from "../../context";

export default function Message() {
  const { messages, loggedUser } = useContextState();

  const getDate = (timestamp) => {
    const date = new Date(+timestamp)
    const day = date.getDate()
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear()
    const hours = date.getHours()
    const min = date.getMinutes()
    return `${day} ${month} ${year} ${hours}:${min}`
  }
  return (
    <div className="message-wrapper">
        {messages.map((m) => {
          const isLoggedAuthor = loggedUser === m.author
          return (
            <div
              key={m._id}
              className={`position-${
                isLoggedAuthor ? "right" : "left"
              }`}
            >
              <div className={`message ${isLoggedAuthor ? 'own' : ''}`}>
                {!isLoggedAuthor && <p className="author">{m.author}</p>}
                <p className="content">{m.message}</p>
                <p className="timestamp">{getDate(m.timestamp)}</p>
              </div>
            </div>
          );
        })}
      </div>
  )
}
