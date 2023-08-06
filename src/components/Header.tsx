import type { SortType } from "../interface";
import "../styles/header.css";

type HeaderProps = {
  setSort: React.Dispatch<React.SetStateAction<SortType>>;
  sortValue: SortType;
};

const Header = ({ setSort, sortValue }: HeaderProps) => {
  return (
    <header className="header">
      <h1>Список всех запусков</h1>

      <select
        name="sorting"
        value={sortValue}
        onChange={(event) => setSort(event.target.value as SortType)}
      >
        <option value="desc">По убыванию</option>
        <option value="asc">По возрастанию</option>
      </select>
    </header>
  );
};

export { Header };
