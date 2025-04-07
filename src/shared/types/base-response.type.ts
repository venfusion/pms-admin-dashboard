import { type Metadata } from './metadata.type';

export type BaseResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  timestamp: Date;
  metadata?: Metadata;
};
