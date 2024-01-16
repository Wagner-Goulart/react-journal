/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return (
        <div>
            {loading ? <p>Loading...</p>: <WrappedComponent {...props}/>}
        </div>
    )

  };
};

export { withLoader }
