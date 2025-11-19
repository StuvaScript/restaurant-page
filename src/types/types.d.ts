type ManipulateDOMType = (
  element: string,
  innerText: string,
  className: string,
  appendTo: string,
  ...attributes: string[]
) => void;

type LongTextType = {
  p1: string;
  p2: string;
};

type InnerObjectType = {
  init: () => void;
  manipulateDOM: ManipulateDOMType;
  createHeader: () => void;
  createMain: () => void;
  createFooter: () => void;
  longText: LongTextType;
  makeTodaysDate: () => void;
};

export type { InnerObjectType };
