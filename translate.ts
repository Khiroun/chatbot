const translate = async (text: string, language = "en") => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a5fe97e320mshbe04253044f8b5cp15279ejsne4358a1be896",
      "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    },
    body: `{"q":"${text}","target":"en"}`,
  };

  const response = await fetch(
    "https://deep-translate1.p.rapidapi.com/language/translate/v2",
    options
  );
  const jsonResponse = await response.json();
  const translatedText = jsonResponse.data.translations.translatedText;
  return translatedText;
};

export default translate;
