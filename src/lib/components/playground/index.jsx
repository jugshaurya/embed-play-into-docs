import * as React from "react";

import {
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
} from "react-view";

export default ({ params }) => {
  return (
    <>
      <div>Mimic-playground</div>
      <div
        style={{
          border: "1px dashed #ccc",
          position: "relative",
        }}
      >
        <Compiler
          {...params.compilerProps}
          minHeight={62}
          placeholder={Placeholder}
        />
      </div>
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </>
  );
};
