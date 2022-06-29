import Search from "../icons/Search";
import styles from  "./searchInput.module.scss";

function SearchInput({className = ''}) {
  return (
    <div className={styles[`search-input-ui`] + ' ' + styles[className]}>
      <span className={styles["search-input-icon"]}>
        <Search width="20" height="20" />
      </span>
      <input
        id="before"
        type="search"
        placeholder="Search"
        className={styles["searchInput"]}
        autoComplete="on"
      />
    </div>
  );
}

export default SearchInput;