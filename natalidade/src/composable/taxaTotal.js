export const fetchDataFromAPITotal = async (
  id,
  setData,
  setTaxaBrasil,
  setTaxaState
) => {
  try {
    // api de total de crianças de 0 a 4 anos
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v3/agregados/1209/periodos/2022/variaveis/1000606?localidades=N1[all]|N3[${id}]&classificacao=58[1140]`
    );
    const result = await response.json();
    console.log("Resultado da API:", result);
    setData(result);

    // Verificar se há resultados e séries disponíveis
    if (result.length > 0 && result[0]?.resultados.length > 0) {
      // Encontrar a série para o Brasil usando o ID "1"
      const taxaBrasil = result[0].resultados[0].series.find(
        (serie) => serie.localidade.id === "1"
      )?.serie["2022"];

      // Encontrar a série para o estado específico usando o ID dinâmico
      const taxaState = result[0].resultados[0].series.find(
        (serie) => serie.localidade.id === id
      )?.serie;

      console.log("Taxa Brasil:", taxaBrasil);
      console.log("Taxa State:", taxaState);

      // Definir a taxa nos estados
      setTaxaBrasil(taxaBrasil);
      setTaxaState(taxaState);
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
