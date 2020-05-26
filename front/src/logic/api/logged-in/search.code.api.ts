import LookupApi, { send } from "../setup/lookup.api";
import { ApiResponse } from "../../../types/api/api.types";
import { CodeSearchResult } from "../../../types/api/code.search.result";

export interface SearchCodeParams {
  term: string;
  page: number;
}

const searchCode = async (
  params: SearchCodeParams
): Promise<ApiResponse<CodeSearchResult>> =>
  await send(
    LookupApi.Instance.post<CodeSearchResult>("search/code", {
      language: "typescript",
      term: params.term,
      page: params.page,
    })
  );

export { searchCode };
