import axios from "axios";
import { AccessToken } from "./get.access.token";
import { ApiResult } from "../../types/api.result.type";

export const searchCode = async (
  accessToken: AccessToken,
  language: string,
  term: string,
  page: number
): Promise<ApiResult<any>> => {
  const url = `https://api.github.com/search/code?q=label:"${term}"+in:file+language:${language}&page=${page}`;

  console.log(url);
  const result = await axios.get(url, {
    headers: {
      Authorization: `${accessToken.type} ${accessToken.token}`,
    },
  });

  if (result.status !== 200) return { success: false };

  return { success: true, data: result.data };
};
