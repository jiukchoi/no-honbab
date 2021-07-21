import React from 'react'
import ListUI from './MeetingsList.presenter'

const List = () => {
  const [inputText, setInputText] = React.useState('')

  return <ListUI inputText={inputText} setInputText={setInputText} />
}

export default List