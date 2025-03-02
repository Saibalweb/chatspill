import React from 'react'

type Props = {}

const Chats = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-full text-gray-500">
      <div className="text-center">
        <h2 className="text-xl font-medium mb-2">Select a conversation</h2>
        <p>Choose a conversation from the list or start a new one</p>
      </div>
    </div>
  )
}

export default Chats;