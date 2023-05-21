import { createSlice } from "@reduxjs/toolkit";
let booler;
let rName;
let rEmail;
let rReg;
let rLogo;
let rAdd;
let rStatus;
const boolerSetter = () => {
  sessionStorage.getItem("loggedIn") ? (booler = true) : (booler = false);
};
const realParser = () => {
  if (sessionStorage.getItem("name")) {
    rName = sessionStorage.getItem("name");
    rEmail = sessionStorage.getItem("email");
    rReg = sessionStorage.getItem("reg");
    rLogo = sessionStorage.getItem("logo");
    rAdd = sessionStorage.getItem("address");
    rStatus = sessionStorage.getItem("status");
  } else {
    rName = "";
    rEmail = "";
    rReg = "";
    rLogo = "";
    rAdd = "";
    rStatus = "";
  }
};
realParser();
boolerSetter();
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: rName,
      email: rEmail,
      reg: rReg,
      logo: rLogo,
      address: rAdd,
      status: rStatus,
      loggedIn: booler,
      isAuthenticating: true,
    },
  },
  reducers: {
    changeAll: (state, action) => {
      state.user = action.payload;
    },
    changeLogo: (state, action) => {
      state.user.logo = action.payload;
    },
    changeStatus: (state, action) => {
      state.user.loggedIn = action.payload;
    },
    changeIsAuth: (state, action) => {
      state.user.isAuthenticating = action.payload;
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
  },
});

// sessionStorage.setItem("name", "");
// sessionStorage.setItem("email", "");
// sessionStorage.setItem("reg", "");
// sessionStorage.setItem("logo", "");
// sessionStorage.setItem("address", "");
// sessionStorage.setItem("status", "");

export const { changeAll, changeLogo, changeStatus, logout, changeIsAuth } =
  userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectUserName = (state) => state.user.user.name;
export const selectUserEmail = (state) => state.user.user.email;
export const selectUserReg = (state) => state.user.user.reg;
export const selectUserLogo = (state) => state.user.user.logo;
export const selectUserAddress = (state) => state.user.user.address;
export const selectUserStatus = (state) => state.user.user.status;
export const selectUserIsAuth = (state) => state.user.user.isAuthenticating;
export const selectUserLoggedIn = (state) => state.user.user.loggedIn;

export default userSlice.reducer;
