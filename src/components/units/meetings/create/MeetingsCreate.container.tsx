import React from 'react'
import CreateUI from './MeetingsCreate.presenter'

const Create = () => {
  const [title, setTitle] = React.useState('')

  return <CreateUI title={title} setTitle={setTitle} />
}

export default Create