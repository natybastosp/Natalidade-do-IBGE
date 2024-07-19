export const fetchDataFromAPITotal = async (
  id,
  setData,
  setTaxaBrasil,
  setTaxaState
) => {
  try {
    // API de total de crianças de 0 a 4 anos
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v3/agregados/1209/periodos/2022/variaveis/1000606?localidades=N1[all]|N3[${id}]&classificacao=58[1140]`
    );
    const result = await response.json();
    console.log("Resultado:", result);

    if (result.length > 0) {
      const data = result[0]; // Acessa o primeiro item do array de resultados
      setData(data);

      // Extrai a taxa do Brasil para o ano de 2022
      const brasilSerie = data.resultados[0]?.series.find(
        (serie) => serie.localidade.id === "1"
      );
      const taxaBrasil = brasilSerie?.serie[2022];
      if (taxaBrasil) {
        setTaxaBrasil(taxaBrasil);
      }

      // Extrai a taxa do estado específico para o ano de 2022
      const estadoSerie = data.resultados[0]?.series.find((serie) => serie);
      const taxaState = estadoSerie?.serie[2022];
      if (taxaState) {
        setTaxaState(taxaState);
      } else {
        console.warn(`Taxa para o estado com id ${id} não encontrada.`);
      }
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
