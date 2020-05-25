import axios from "axios";
import { AccessToken } from "./get.access.token";
import { ApiResult } from "../../types/api.result.type";
import { isGithubUser } from "../data-validation/user.validation.logic";

export const getUserData = async (
  accessToken: AccessToken
): Promise<ApiResult<any>> => {
  const result = await axios.get(`https://api.github.com/user`, {
    headers: {
      Authorization: `${accessToken.type} ${accessToken.token}`,
    },
  });

  if (result.status !== 200 || !isGithubUser(result.data))
    return { success: false };

  return { success: true, data: result.data };
};
