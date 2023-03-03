import { Label } from "@ui5/webcomponents-react";

const LabelMovie = ({ children, props }: any) => {
  return (
    <>
      <Label {...props}>{children}</Label>
    </>
  );
};

export default LabelMovie;
