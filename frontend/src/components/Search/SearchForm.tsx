import { Field, Formik, Form } from "formik";
import {
  Button,
  ButtonDesign,
  FlexBox,
  InputType,
} from "@ui5/webcomponents-react";

import Input from "../../components/Form/Input/Input";
import SearchFormValidationSchema from "./SearchFormValidationSchema";

import API from "../../api/Api";
import ListMovies from "../List/ListMovies";
import { useDispatch } from "react-redux";
import { moviesList } from "../../store/reducers/movies";

const SearchForm = () => {
  const dispatch = useDispatch();
  const onSubmitSearchForm = async (values: any) => {
    const { data } = await API.get(
      `movies/searchByTitle?title=${values.title}`
    );
    dispatch(moviesList(data));
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ titulo: "" }}
        validationSchema={SearchFormValidationSchema}
        onSubmit={onSubmitSearchForm}
      >
        {({ handleSubmit }) => (
          <FlexBox
            alignItems="Center"
            direction="Column"
            justifyContent="Center"
            wrap="NoWrap"
          >
            <Form>
              {" "}
              <Field
                name="title"
                required
                placeholder="Digite o nome do filme aqui"
                type={InputType.Text}
                component={Input}
              />
              <Button
                onClick={(e) => handleSubmit()}
                design={ButtonDesign.Emphasized}
              >
                Pesquisar
              </Button>
            </Form>
            <ListMovies />
          </FlexBox>
        )}
      </Formik>
    </>
  );
};

export default SearchForm;
