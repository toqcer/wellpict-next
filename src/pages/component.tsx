import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface PlaceholderResponse {
  userId: number;
  id: number;
  title: string;
  completed: number;
}

const getPlaceholder = async () => {
  const { data } = await axios.get<PlaceholderResponse>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return data;
};

export default function Component() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-placeholders"],
    queryFn: getPlaceholder,
  });

  if (isLoading) return <p>loading</p>;

  return <div className="text-success-400">Home</div>;
}
