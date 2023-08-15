import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Meetup {
    id: string,
    image: string,
    title: string,
    address: string
}

const initialState: Meetup[] = [];

const meetupSlice = createSlice({
    name: 'meetup',
    initialState,
    reducers: {
        addMeetup: (state, action: PayloadAction<Meetup>) => {
            state.push(action.payload);
            // console.log(action.payload)
        },
    },
});

export const { addMeetup } = meetupSlice.actions;

export default meetupSlice.reducer;
