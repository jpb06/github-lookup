import { getToken } from "./session.logic";
import { generateGuid } from "./string.util";

export default class Config {
  static scope = "user";
  static state = generateGuid();
  static token: string = getToken() || "";
}
