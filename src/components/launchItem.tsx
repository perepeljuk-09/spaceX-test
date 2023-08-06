import { transformDate } from "../helpers";
import { ILaunche } from "../interface";
import "../styles/launchItem.css";

type LaunchItemProps = {
  rocketUrl: string;
} & ILaunche;

const LaunchItem = (props: LaunchItemProps) => {
  const { details, name, rocket, date_utc, rocketUrl } = props;

  const date = transformDate(date_utc);

  return (
    <div className="launch-item" title={`Рокета ${rocket}`}>
      <div className="launch-item__mission">
        <h3 className="launch-item__text_normal">
          Название миссии:{" "}
          <span className="launch-item__text_semibold">{name}</span>
        </h3>
        <img
          className="launch-item__rocket"
          src={rocketUrl}
          alt="фото рокеты"
        />
      </div>

      <h4>
        Детали миссии:{" "}
        <span className="launch-item__text_normal">
          {details ? details : "Информация отсутствует"}
        </span>
      </h4>
      <h4>
        Дата запуска:{" "}
        <span className="launch-item__text_normal">
          {date ? date : "Информация отсутствует"}
        </span>
      </h4>
    </div>
  );
};

export { LaunchItem };
