import detect from "./detect";
import isHateSpeech from "./isHateSpeech";
import translate from "./translate";

const getHateSpeechResponse = (language: string) => {
  if (language === "en") {
    return "Your message cannot be sent because it contains hate speech.";
  }
  if (language === "ar") {
    return "لا يمكن إرسال رسالتك لأنها تحتوي على سوء الاستفادة.";
  }
  if (language === "fr") {
    return "Votre message ne peut pas être envoyé car il contient du haine de la langue.";
  }
  return "Your message cannot be sent because it contains hate speech.";
};
const fetchResponse = async (text: string) => {
  const response = await fetch("localhost:5000/chat", {
    method: "POST",
    body: JSON.stringify({ chatInput: text }),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const getResponse = async (text: string) => {
  const language = await detect(text);
  const input = await translate(text);
  const isHateful = await isHateSpeech(input);
  if (isHateful) {
    return getHateSpeechResponse(language);
  }
  const response = await fetchResponse(input);
  const translatedResponse = await translate(response, language);
  return translatedResponse;
};

export default getResponse;
