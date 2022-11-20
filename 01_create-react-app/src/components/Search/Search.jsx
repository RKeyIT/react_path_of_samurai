import React from "react";
import styles from "./Search.module.css"

const Search = (props) => {
    return (
        <div className={styles.Search}>
            <input type="search" name={props.name} id={props.id} placeholder="Search"/>
        </div>
    )
}

export default Search