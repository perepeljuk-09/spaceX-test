import { useMemo, useState } from "react";
import "./styles/index.css";
import "./styles/app.css";
import {
  useGetAllLaunchesQuery,
  useGetAllRocketsQuery,
} from "./services/spaceXApi";
import { Header } from "./components/Header";
import type { SortType } from "./interface";
import { compareDate } from "./helpers";
import { LaunchList } from "./components/LaunchList";

const App = () => {
  const [sort, setSort] = useState<SortType>("desc");
  const { data, isLoading, error } = useGetAllLaunchesQuery("");
  const { data: RocketsData } = useGetAllRocketsQuery("");

  const LaunchesData = useMemo(() => {
    return !isLoading && data.length
      ? data.filter((launch) => {
          const year = +launch.date_utc.split("-")[0];
          return year >= 2015 && year <= 2019;
        })
      : [];
  }, [isLoading, data]);

  const SortLaunhesData = useMemo(() => {
    return LaunchesData.length
      ? LaunchesData.sort((a, b) => compareDate(sort, a.date_utc, b.date_utc))
      : LaunchesData;
  }, [LaunchesData, sort]);

  return (
    <div className="app">
      {isLoading ? (
        <h2>Загрузка...</h2>
      ) : error ? (
        <h2>Произошла ошибка {"message" in error && error.message}</h2>
      ) : !SortLaunhesData.length || !RocketsData ? (
        <h2>Данных нет</h2>
      ) : (
        <>
          <Header setSort={setSort} sortValue={sort} />
          <LaunchList
            SortLaunhesData={SortLaunhesData}
            RocketsData={RocketsData}
          />
        </>
      )}
    </div>
  );
};

export { App };
