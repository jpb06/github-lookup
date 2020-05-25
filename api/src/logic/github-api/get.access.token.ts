import axios from "axios";
import { ApiResult } from "../../types/api.result.type";
import { toObject } from "../util/query.string.util";

export interface AccessToken {
  type: string;
  token: string;
}

export const getAccessToken = async (
  code: string,
  state: string
): Promise<ApiResult<AccessToken>> => {
  const result = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.GITHUB_CLIENT_ID as string,
      client_secret: process.env.GITHUB_CLIENT_SECRET as string,
      code,
      state,
    }
  );

  if (result.status !== 200) return { success: false };

  const output = toObject(result.data);
  return {
    success: true,
    data: { type: output.token_type, token: output.access_token },
  };
};
