import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { matchSorter } from "match-sorter";

function List(props) {
  const [simpleData, setSimpleData] = useState([]);
  const [sortConfig, setSortConfig] = React.useState(null);

  useEffect(() => {
    setSimpleData(props.simpleData);
  }, []);

  function handleSort() {
    const sortData = [...simpleData].sort((a, b) => {
      if (a.name < b.name) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setSimpleData(sortData);
    console.log(simpleData, "pppppppppppppp");
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const listComponent = props.simpleData.map((user) => {
    return <ListItem name={user.name} />;
  });
  return (
    <>
      <p onClick={() => requestSort("name")}>Name</p>

      <ul>{listComponent}</ul>
    </>
  );
}

export default List;
