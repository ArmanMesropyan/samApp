import React  from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

function withAuthRedirect(Component) {
    function ComponentRedirect(props) {
        const isAuth = useSelector((state) => state.auth.data.isAuth)
            if (!isAuth) {
                return <Redirect to="/login"/>
            }
            return   <Component { ...props}/>
    }
    return ComponentRedirect;
}
export default withAuthRedirect