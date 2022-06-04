import React from 'react'
import { Link } from 'react-router-dom';

const DialogItems = ({name , id}) =>{
    let path = "/dialogs/" + id;
    return <div className="L-dialog-link">
              <Link to={path}> 
                 {name}
              </Link>
           </div>
  }
export default DialogItems