declare namespace Express {
  export interface Response {
    populate: (data: any) => Response;
    answer: (status: number, data: any) => Response;
    terminate: (status: number, message: string) => void;
  }
}
