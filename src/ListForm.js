import React, { useEffect, useMemo, useState } from "react";
import Services from "./services";

const ListForm = (props) => {
    const [vals, setVals] = useState([]);

    return (
        <>
            <table>
                {
                    // Services.getVals().map(n => <tr><td>{n.ids}</td><td>{n.pname}</td><td>{n.pemail}</td></tr>)
                    Services.getVals().map(n => <tr><td>{n.scid}</td><td>{n.scname}</td></tr>)
                }
            </table>
        </>
    );
}

export default ListForm;
