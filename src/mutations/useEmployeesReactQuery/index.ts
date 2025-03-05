import { Employee } from "../../type";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

//@ts-ignore
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export const useEmployees = () => {

  const triggerGetEmployees = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/employees`);
      return response.data;
    },
  });

  return {
    triggerGetEmployees
  }
};
