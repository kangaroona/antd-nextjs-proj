import useSWR from "swr";
import { fetcher } from "../libs/fetch";

/**
 * @description getMenuData
 * @param {string} url
 * @return {*}
 */
export const useMenu = (url: string) => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    data,
    isLoading,
    isError: error,
  };
};
