import type { Person } from "@manifold/shared/types/Person";
import styles from "../styles/List.module.css";

type Props = {
  data: Person[];
};

export const List = ({ data }: Props) => {
  return (
    <div>
      {data.map((d, i) => (
        <li key={i} className={styles.personList}>
          {d.name} - {d.age}
        </li>
      ))}
    </div>
  );
};
