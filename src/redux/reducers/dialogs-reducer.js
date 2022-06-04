import {
  createSlice
} from "@reduxjs/toolkit"

const initialState = {
  dialogs: [{
      id: 1,
      name: "Arman"
    },
    {
      id: 2,
      name: "Armo"
    },
    {
      id: 3,
      name: "Aram"
    },
    {
      id: 4,
      name: "Jack"
    },
    {
      id: 5,
      name: "Lily"
    },
    {
      id: 6,
      name: "Amy"
    },

  ],
  messages: [{
      id: 1,
      name: "hi"
    },
    {
      id: 2,
      name: "hello"
    },
    {
      id: 3,
      name: "yo"
    },
    {
      id: 4,
      name: "bye"
    },
    {
      id: 5,
      name: "hiii"
    },
    {
      id: 6,
      name: "ee"
    },

  ],
  newMessageBody: ''
}

const dialogSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addMessage(state) {
      state.messages.push({
        id: Math.random().toString(36).substr(2, 9),
        name: state.newMessageBody,
      })
      state.newMessageBody = ''
    },
    messageChange(state, action) {
      state.newMessageBody = action.payload
    }
  }
})
export default dialogSlice.reducer
export const {
  addMessage,
  messageChange
} = dialogSlice.actions