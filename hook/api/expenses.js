import { useQuery } from "@tanstack/react-query";
import BaseUrl from "../../api/api-config";

export const useGetExpenses = () => {
  const { data, status } = useQuery({
    queryKey: ["all-expenses"],
    queryFn: async () => {
      const response = await BaseUrl.get("/rest/v1/expenses");

      const expenses = response.data.map((_expense) => ({
        ..._expense,
        date: new Date(_expense.date),
      }));

      return expenses;
    },
  });

  return { data, status };
};
