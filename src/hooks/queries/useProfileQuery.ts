import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetProfileResult } from "apis/types";
import { getProfile } from "apis/user";
import { AxiosError } from "axios";

type Props = {
  userId: string;
  options?: UseQueryOptions<
    GetProfileResult,
    AxiosError,
    GetProfileResult,
    any
  >;
};

function useProfileQuery({ userId, options = {} }: Props) {
  return useQuery(["user", userId], () => getProfile({ userId }), options);
}

export default useProfileQuery;
