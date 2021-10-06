import { DivState } from "../context/divState";

export const withLayoutEffect = (WrappedComponent) => {
  return (props) => (
    <DivState>
      <WrappedComponent {...props} />
    </DivState>
  );
};
