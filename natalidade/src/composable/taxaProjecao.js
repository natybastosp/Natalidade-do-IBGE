export const fetchDataFromAPIFuture = async (id, setData, setDataByYear) => {
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v3/agregados/7365/periodos/-6/variaveis/10615?localidades=N3[${id}]&classificacao=58[100402]|1933[49041,49042,49043,49044,49045,49046]`
    );
    const result = await response.json();

    if (result && result[0] && result[0].resultados) {
      setData(result[0]);

      const series = result[0].resultados;
      const dataByYear = {};

      series.forEach((item) => {
        const year = item.classificacoes.find(
          (c) => c.id === "1933"
        )?.categoria;
        if (year) {
          const yearValue = Object.values(year)[0];
          if (yearValue) {
            dataByYear[yearValue] = item.series[0]?.serie;
          }
        }
      });

      setDataByYear(dataByYear);
    } else {
      console.warn("Nenhum resultado encontrado na resposta da API.");
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
