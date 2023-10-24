interface IAdminForm {
  initialValues: any;
  validationSchema: any;
  submitHandler: (values: any) => void;
  formFields: IFormField[];
  isLoading?: boolean;
}
