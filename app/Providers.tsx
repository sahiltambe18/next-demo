"use client"
import React from 'react'
import store from '../store/store'
import { Provider } from 'react-redux';


const Providers = (props:{children:React.ReactNode}) => {
  return (
    <Provider store={store} >
        {props.children}
    </Provider>
  )
}

export default Providers
