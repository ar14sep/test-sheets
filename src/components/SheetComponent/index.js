import { useEffect, useState } from "react";
import useFetch from "../../hooks";
import "./index.css";

const SheetComponent = () => {

    const dataReq = useFetch();
    const { request, data, loading} = dataReq;

    const [rowsState, setRowsState] = useState([]);

    const [selectedItem, setSelectedItem] = useState({});

    const { headers = {}, data: rowsData =[] } = data;

    useEffect(() => {
        request("http://localhost:9000");
    }, [])

    useEffect(() => {
        setRowsState(rowsData);
    }, [rowsData])

    const onChange = (e,index, key) => {
      const newArr = [...rowsState];
      newArr[index][key] = e.target.value;
      setRowsState(newArr);
    }

    const onSelectClick = (e) => {
        const {index, key} = selectedItem;
        const newArr = [...rowsState];
        newArr[index]["colorClass"] = "greenClass";
        setRowsState(newArr);
    }

    const x = Object.keys(headers) || [];
    const y = ["name", "age"];
    return (
        <div className="container">
            <div>
                <select onChange={() => onSelectClick()}>
                    <options value="green">
                        Green
                    </options>
                    <options value="red">
                        red
                        </options>
                        <options value="yellow">
                        yellow
                        </options>
                </select>
            </div>
            {x.map((key) => (
                <div className="columnContainer">
                    {headers[key]}
                    {rowsState.length > 0 ? rowsState.map((row, index) => (
                           <input
                             value={row[key] || ""}
                             className={`cell ${row["colorClass"]}`}
                             onChange={(e) => onChange(e,index, key)}
                             onClick={() =>setSelectedItem({index, key}) }
                           />
                    )) : null}
                </div>
            ))}
        </div>
    )
}

export default SheetComponent;