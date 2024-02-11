import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { User } from '@/types'

// Define a type for the slice state
export interface AccountState {
  user?: User
}

// Define the initial state using that type
const initialState: AccountState = {
  user: undefined
}

export const accountState = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    forgetUser: (state) => {
      state.user = undefined
    }
  }
})

export const { updateUser, forgetUser } = accountState.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.account.user

export default accountState.reducer