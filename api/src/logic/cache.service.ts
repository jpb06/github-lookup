import { LoggedUser } from "../types/logged.user.type";

interface Dictionary<T> {
  [Key: string]: T;
}

export abstract class CacheService {
  private static cachedUsers: Dictionary<LoggedUser> = {};

  public static GetUserBy(id: number): LoggedUser | undefined {
    let user = this.cachedUsers[id];
    return user;
  }

  public static SetUser(user: LoggedUser): void {
    this.cachedUsers[user.id] = user;
  }
}
