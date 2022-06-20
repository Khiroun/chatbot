const detectLanguage = async (input: string) => {
  const options = {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": "a5fe97e320mshbe04253044f8b5cp15279ejsne4358a1be896",
      "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    },
    body: `{"q": "${input}"}`,
  };

  const response = await fetch(
    "https://deep-translate1.p.rapidapi.com/language/translate/v2/detect",
    options
  );
  const jsonResponse = await response.json();
  const detectedLanguage = jsonResponse.data.detectedLanguage.language;
  return detectedLanguage;
};
export default detectLanguage;
