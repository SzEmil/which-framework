type inputType = { label: string; placeholder: string; error: string };
type inputErrorPhone = {
  error: {
    numberRequired: string;
    invalidNumber: string;
  };
};
type inputPhoneType = Omit<inputType, 'error'> & inputErrorPhone;

export type ContentSchema = {
  home: {
    nav: {
      home: string;
    };
  };
};
