import useSWR from "swr";
import { fetcher } from "../libs/fetch";

/**
 *
 * @description getUserList
 * @param {number} pageId
 * @return {*}
 */
export const UseUserPageId = (pageId: number) => {
  const url: string = "/user/list";
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    data,
    isLoading,
    isError: error,
  };
};
