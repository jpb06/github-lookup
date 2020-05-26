import { LoggedUser } from "../../types/logged.user.type";

interface Dictionary<T> {
  [Key: string]: T;
}

export abstract class CachedUsersService {
  private static cachedUsers: Dictionary<LoggedUser> = {};

  public static GetBy(id: number): LoggedUser | undefined {
    let user = this.cachedUsers[id];
    return user;
  }

  public static Set(user: LoggedUser): void {
    this.cachedUsers[user.id] = user;
  }
}
