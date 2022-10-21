
import { AppRouter } from './Routes/AppRouter'
import {Store} from "./Store/Store"

import { Provider } from "react-redux";
export const VinanceApp = () => {
  return (
    <Provider store={Store}>
          <AppRouter/>
    </Provider> 
  )
}
