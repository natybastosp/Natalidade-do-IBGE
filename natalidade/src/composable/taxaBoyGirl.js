export const fetchDataFromAPIBoyGirl = async (
  id,
  setData,
  setTaxaBoy,
  setTaxaGirl
) => {
  try {
    // API para população de 0 a 4 anos por sexo
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v3/agregados/9514/periodos/2022/variaveis/1000093?localidades=N3[${id}]&classificacao=2[4]|287[93070]|286[6555]`
    );
    const result = await response.json();
    console.log("Resultado da API:", result);
    setData(result);

    // Verificar se há resultados e séries disponíveis
    if (result.length > 0 && result[0]?.resultados.length > 0) {
      // Encontrar a série para homens usando o ID "4"
      const taxaBoy = result[0].resultados
        .find((resultado) =>
          resultado.classificacoes.find(
            (classificacao) => classificacao.categoria["4"]
          )
        )
        .series.find((serie) => serie.localidade.id === "12")?.serie["2022"];

      // Encontrar a série para mulheres usando o ID "5"
      const taxaGirl = result[0].resultados
        .find((resultado) =>
          resultado.classificacoes.find(
            (classificacao) => classificacao.categoria["5"]
          )
        )
        .series.find((serie) => serie.localidade.id === "12")?.serie["2022"];

      // Definir as taxas para meninos e meninas
      setTaxaBoy(taxaBoy);
      setTaxaGirl(taxaGirl);
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
