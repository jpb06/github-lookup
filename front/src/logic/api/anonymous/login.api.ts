import axios from "axios";
import { persistToken } from "../../session.logic";
import Config from "../../config";

export const login = async (code: string): Promise<Boolean> => {
  try {
    const result = await axios.post<string>(
      `${process.env.REACT_APP_API_URI}/login`,
      {
        code,
        state: Config.state,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (result.status === 200) {
      Config.token = result.data;
      persistToken(result.data);

      return true;
    }

    return false;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
