import type { ILaunche, IRocket } from "../interface";
import { LaunchItem } from "./launchItem";

type LaunchListProps = {
  SortLaunhesData: ILaunche[];
  RocketsData: IRocket[];
};

const LaunchList = ({ SortLaunhesData, RocketsData }: LaunchListProps) => {
  return (
    <>
      {SortLaunhesData.map((launch) => {
        const rocketUrl = RocketsData.find(
          (rocket) => rocket.id === launch.rocket
        ).flickr_images[0];
        return <LaunchItem key={launch.id} {...launch} rocketUrl={rocketUrl} />;
      })}
    </>
  );
};

export { LaunchList };
