import apiClient from '@/api/apiClient';
import { GetUserRequest, GetUserResponse } from '@/types/UserTypes';

// getServerSideProps 확인을 위해 cookieHeader 부분 임시 추가
export const getUser = ({ cookieHeader }: GetUserRequest = {}): Promise<GetUserResponse> => {
  return apiClient.get(`/${process.env.NEXT_PUBLIC_TEAM}/users/me`, {
    headers: cookieHeader ? { cookie: cookieHeader } : {},
  });
};
