import { Grid, Text, Title, TitleLevel } from "@ui5/webcomponents-react";

import "./styles.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/services/useFetch";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function ShowPage() {
  const [data, setData] = useState<any>([]);

  const id = useSelector((state: RootState) => state.show);

  const GetData = async () => {
    const data = await useFetch(`movies/searchById/${id}`);
    setData(data);
  };

  useEffect(() => {
    GetData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid>
        <Title level={TitleLevel.H5}> {data.Title}</Title>
        <Text>{data.Plot}</Text>
        <Text>Ator: {data.Actors}</Text>
        <img src={data.Poster} alt="" />
      </Grid>
    </>
  );
}
