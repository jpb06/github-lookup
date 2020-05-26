import axios from "axios";
import { ApiResponse } from "../../../types/api/api.types";
import Config from "../../config";

export const getAuthorizeUrl = async (): Promise<ApiResponse<string>> => {
  try {
    const result = await axios.get<string>(
      `${process.env.REACT_APP_API_URI}/authorize-url?scope=${Config.scope}&state=${Config.state}`
    );

    if (result.status === 200) {
      return { success: true, data: result.data };
    }

    return {
      success: false,
      error: result.data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
