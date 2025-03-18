export interface commonResponseType {
  success: boolean;
  message: string;
  code: number;
  data: <T>(data: T) => T;
}

export interface mainBannerType {
  id: number;
  description: string;
  imgUrl: string;
}
