import React from 'react'
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import withAuthRedirect from './../../../hoc/withAuthRedirect';
import DialogItems from './components/dialogItem/index';
import MessageItems from './components/messages/index';
import { addMessage, messageChange } from '../../../redux/reducers/dialogs-reducer'
import './index.scss'
const Dialogs = () => {

  const dispatch = useDispatch()
  const messages = useSelector((state) => state.dialogReducer)
  let dialogItems = messages.dialogs.map(item =>
    <DialogItems key={item.id} name={item.name} id={item.id} />)
  let messageItems = messages.messages.map(item =>
    <MessageItems key={item.id} message={item.name} id={item.id} />)
  let newMessageBody = messages.newMessageBody

  const addMess = () => {
    if(newMessageBody){
      dispatch(addMessage())
    }
  
  }
  const handleMessage = (e) => {
    let body = e.target.value
    dispatch(messageChange(body))
  }
  return (
    <div className='L-dialogs G-container G-flex G-justify-between'>
      <div className="L-dialog-items">
        {dialogItems}
      </div>
      <div className="L-dialog-items">
        <div> {messageItems}</div>
        <div className='L-dialog-add-parent G-flex '>
          <div className='L-dialog-add'>
            <textarea
              placeholder='Enter Your Message'
              value={newMessageBody}
              onChange={handleMessage}></textarea></div>
          <div className='L-dialog-add-btn'>
            <button onClick={addMess}>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default compose(
  withAuthRedirect, 
)(Dialogs)