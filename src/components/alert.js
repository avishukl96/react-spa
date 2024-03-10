import React from "react";

function alert(props) {
  const capitalize = (word) => {
    const lowerText = word.toLowerCase();
    return lowerText.charAt(0).toUpperCase() + lowerText.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    )
  );
}

export default alert;
