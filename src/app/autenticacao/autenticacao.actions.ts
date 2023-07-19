import { createAction, props } from "@ngrx/store";
import { IUser } from "./model/user.interface";

export const login = createAction(
  "[Login Page] User Login",
  props<IUser>()
)
