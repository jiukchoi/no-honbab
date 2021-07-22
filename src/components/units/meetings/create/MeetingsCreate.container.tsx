import React from 'react'
import CreateUI from './MeetingsCreate.presenter'

const Create = () => {
  const [input, setInput] = React.useState({
    title: "",
    time: "",
    place: "",
    recruitment: 0,
    foodType: "",
    contents: "",
  })

  const [isCreate, setIsCreate] = React.useState(false)

  React.useEffect(() => {
    if (input.title &&
    input.recruitment &&
    input.foodType &&
    input.contents) setIsCreate(true)
    else setIsCreate(false)
  }, [input])

  return <CreateUI input={input} setInput={setInput} isCreate={isCreate} />
}

export default Create