import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk<
  {
    username: string;
    role: "admin" | "user";
  }[]
>("users/getUsers", async (thunkApi) => {
  const res = await fetch("/api/users");
  const data = await res.json();
  return data;
});

interface IUserState {
  entities: {
    username: string;
    role: "admin" | "user";
  }[];
}

const initialState: IUserState = {
  entities: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities.concat(action.payload);
    });
  },
});

export default userSlice.reducer;
