import * as yup from "yup";

const SearchFormValidationSchema = yup.object({
  title: yup.string().required().min(3, "Preencha pelo menos 3 caracteres!"),
});

export default SearchFormValidationSchema;
