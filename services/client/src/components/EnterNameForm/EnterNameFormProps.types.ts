export type EnterNameFormProps<Data> = {
  onSubmit: (data: Data) => void;
  onCancel?: () => void;
};
