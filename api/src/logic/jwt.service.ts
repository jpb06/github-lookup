import * as jwt from "jsonwebtoken";
import { VaultService } from "rsa-vault";

export abstract class JwtService {
  public static async generate(id: number) {
    const keys = await VaultService.GetKeyPair("github-lookup");

    const token = jwt.sign(
      {
        id,
      },
      keys.privateKey,
      {
        algorithm: "RS256",
        expiresIn: "20m",
      }
    );

    return token;
  }

  public static async verify(token: string): Promise<number> {
    const keyPair = await VaultService.GetKeyPair("github-lookup");

    const result = jwt.verify(token, keyPair.publicKey);

    return (<any>result).id;
  }
}
