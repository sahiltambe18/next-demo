import {configureStore} from '@reduxjs/toolkit'
import meetupSlice from './MeetupSlice'

const store = configureStore({
    reducer:{
        meetup:meetupSlice
    }
})

export default store;