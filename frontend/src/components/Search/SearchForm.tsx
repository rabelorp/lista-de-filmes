import { Field, Formik, Form } from "formik";
import {
  Button,
  ButtonDesign,
  FlexBox,
  InputType,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/paper-plane.js";

import Input from "../../components/Form/Input/Input";
import SearchFormValidationSchema from "./SearchFormValidationSchema";

import { useState } from "react";
import API from "../../api/Api";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [data, setData] = useState([]);
  const onSubmitSearchForm = async (values: any) => {
    const { data } = await API.get(
      `movies/searchByTitle?title=${values.title}`
    );
    setData(data.Search);
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
            <List>
              {data.map((movie: any) => (
                <Link to={`show/${movie.imdbID}`}>
                  <StandardListItem data-id={movie.imdbID} key={movie.imdbID}>
                    {movie.Title}
                  </StandardListItem>
                </Link>
              ))}
            </List>
          </FlexBox>
        )}
      </Formik>
    </>
  );
};

export default SearchForm;
