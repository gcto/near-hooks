export type ContractId = string;

export interface SignInRequest {
  signature: string;
}

export interface SignInResponse {
  profile: {
    // TODO
  };
  token: string;
}
