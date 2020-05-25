import { User } from "../../../types/app/user.type";
import LookupApi, { send } from "../setup/lookup.api";
import { ApiResponse } from "../../../types/api/api.types";

const getUser = async (): Promise<ApiResponse<User>> =>
  await send(LookupApi.Instance.get<User>("user"));

export { getUser };
