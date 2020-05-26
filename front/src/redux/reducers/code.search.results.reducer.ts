import { initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { ActionType } from "../../types/redux/action.types";
import { CodeSearchResult } from "../../types/api/code.search.result";

const codeSearchResultsReducer = (
  state: CodeSearchResult | null = initialState.codeSearchResults,
  action: ActionWithPayload<CodeSearchResult>
) => {
  switch (action.type) {
    case ActionType.SearchCodeSuccess:
      return action.payload;
  }

  return state;
};

export default codeSearchResultsReducer;
