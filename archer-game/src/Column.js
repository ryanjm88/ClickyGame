import React from "react";

const Column = props => {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    return (
        <div className={size}>
            {props.chilren}
        </div>
    );
};

export default Column;