/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NAVER_CLIENT_ID: string;
    NAVER_CLIENT_SECRET: string;
  }
}
