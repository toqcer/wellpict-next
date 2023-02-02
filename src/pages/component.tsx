import ReactSelect from "react-select";
import Select from "@/components/Select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Component() {
  return (
    <div className="p-2">
      <ReactSelect {...{ options }} />
      <Select {...{ options }} />
    </div>
  );
}

// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// interface PlaceholderResponse {
//   userId: number;
//   id: number;
//   title: string;
//   completed: number;
// }

// const getPlaceholder = async () => {
//   const { data } = await axios.get<PlaceholderResponse>(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   );

//   return data;
// };

// export default function Component() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["get-placeholders"],
//     queryFn: getPlaceholder,
//   });

//   if (isLoading) return <p>loading</p>;

//   return <div className="text-success-400">Home</div>;
// }
