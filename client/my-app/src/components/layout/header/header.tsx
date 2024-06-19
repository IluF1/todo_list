import styles from "./header.module.scss";
import { FaTasks } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

export const Header = () => {
  const default_color = "#ffffff";
  const active_color = "#a200ff";
  const user: boolean = true;

  return (
    <div className={styles.container}>
      {user ? (
        <ul className={styles.list}>
          <li className={styles.elem_one}>
            <a
              href="/"
              className={styles.elem_one_link}
              style={{
                color: location.pathname == "/" ? active_color : default_color,
              }}
            >
              <FaTasks className={styles.img_one} />
              Все задачи
            </a>
          </li>
          <li>
            <a href="/create_task">Создать задачу</a>
          </li>
          <li className={styles.elem_three}>
            <a
              href="/profile"
              className={styles.elem_three_link}
              style={{
                color:
                  location.pathname == "/profile"
                    ? active_color
                    : default_color,
              }}
            >
              <BiUserCircle className={styles.img_three} />
              Профиль
            </a>
          </li>
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  );
};
