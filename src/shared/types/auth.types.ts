export interface ILoginRequest {
  identifier: string;
  password: string;
}

export interface ILoginResponse {
  status: string;
  message: string;
  data: {
    user: {
      id: string;
      login: string;
      email: string;
      createdAt: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
      accessTokenExpiresInMs: number;
      refreshTokenExpiresInMs: number;
    };
    session: {
      status: string;
      message: string;
      data: {
        id: string;
        refreshToken: string;
        userId: string;
        ip: string;
        userAgent: string;
        createdAt: string;
        expiresAt: string;
        isRevoked: false;
      };
    };
  };
}

export interface IVerifyLogin {
  code: string;
}

export interface IVerifyLoginResponse {
  status: string;
  message: string;
  data: {
    user: {
      id: string;
      login: string;
      email: string;
      createdAt: string;
    };
    tokens: {
      accessToken: string;
      accessTokenExpiresAt: string;
      refreshToken: string;
      refreshTokenExpiresAt: string;
    };
  };
}

export interface ISendCodeRequest {
  email: string;
}

export interface ISendCodeResponse {
  status: string;
  message: string;
  data: {
    id: string;
    email: string;
    isActivatedCode: boolean;
    code: string;
    codeExpiresAt: Date;
    login: string | null;
    password: string | null;
    roleId: string | null;
    name: string | null;
    surName: string | null;
    lastName: string | null;
    step: number;
    createdAt: Date;
  };
}

export interface IVerifyAccountRequest {
  code: string;
}

export interface IVerifyAccountResponse {
  status: string;
  message: string;
}
