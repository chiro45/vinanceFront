
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

export const PublicRoute = ({children}) => {

    const {userName}=  useSelector(state => state.userReducer)
    return (
        (userName === null)
        ?   children  
        :  <Navigate to="/store" />
    )              
}
 
 
