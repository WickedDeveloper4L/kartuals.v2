import React from "react";
import { PropagateLoader } from "react-spinners";
import { SpinnerOverlay } from "./with-spinner.style";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <PropagateLoader color="#b87333" className="loader" />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;
