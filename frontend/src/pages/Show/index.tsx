import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Grid,
  Text,
  Title,
  TitleLevel,
} from "@ui5/webcomponents-react";

import "./styles.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/Api";

export function ShowPage() {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<any>([]);

  const getData = async () => {
    const { data } = await API.get(`movies/searchById/${id}`);
    setData(data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid>
      <Title level={TitleLevel.H5}> {data.Title}</Title>
      <Text>{data.Plot}</Text>
      <Text>Ator: {data.Actors}</Text>
      <img src={data.Poster} alt="" />
    </Grid>
  );
}
