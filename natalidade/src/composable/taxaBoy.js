export const fetchDataFromAPIBoy = async (id, setData, setTaxaBoy) => {
  try {
    // API para população de 0 a 4 anos por sexo
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v3/agregados/9514/periodos/-6/variaveis/1000093?localidades=N3[${id}]&classificacao=2[4]|287[93070]|286[6555]`
    );
    const result = await response.json();

    if (result.length > 0) {
      const data = result[0]; // Acessa o primeiro item do array de resultados
      setData(data);

      // Extrai a taxa para o ano mais recente disponível
      const taxaBoy = data.resultados[0]?.series[0]?.serie[2022];
      if (taxaBoy) {
        setTaxaBoy(taxaBoy);
      }
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
