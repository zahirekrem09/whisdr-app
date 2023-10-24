interface IFormField {
  id: string;
  name: string;
  type?:
    | "text"
    | "file"
    | "date"
    | "number"
    | "select"
    | "multi-select"
    | "editor"
    | "password";
  options?: ISelect[];
  onChangeHandler?: (v: any) => void;
}
