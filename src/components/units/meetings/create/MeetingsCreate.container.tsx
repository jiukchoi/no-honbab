import React from 'react'
import CreateUI from './MeetingsCreate.presenter'

const Create = () => {
  const [input, setInput] = React.useState({
    title: "",
    time: {
      month: "00",
      date: "00",
      startTime: {
        hours: "00",
        mins: "00",
      },
      endTime: {
        hours: "00",
        mins: "00",
      },
    },
    place: "",
    recruitment: "",
    foodType: "",
    contents: "",
  })

  const [isState, setIsState] = React.useState({
    time: {
      window: false,
      pickerMonth: false,
      pickerDate: false,
      pickerStartTime: false,
      pickerEndTime: false,
    },
    place: false,
    create: false,
  })

  React.useEffect(() => {
    if (input.title &&
    input.recruitment &&
    input.foodType &&
    input.contents) setIsState({...isState, create: true})
    else setIsState({...isState, create: false})
  }, [input])

  return <CreateUI input={input} setInput={setInput} isState={isState} setIsState={setIsState} />
}

export default Create