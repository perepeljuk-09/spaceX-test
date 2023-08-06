import type { SortType } from "../interface";

const transformDate = (date: string) => {
  return date.split("T").join(" ").split(".")[0];
};

const compareDate = (
  sort: SortType,
  first_date: string,
  second_date: string
) => {
  if (sort === "desc") {
    return new Date(second_date).getTime() - new Date(first_date).getTime();
  } else {
    return new Date(first_date).getTime() - new Date(second_date).getTime();
  }
};

export { transformDate, compareDate };
