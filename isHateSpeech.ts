const axios = require("axios");

const isHateSpeech = async (text: string) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("text", text);

  const options = {
    method: "POST",
    url: "https://hate-speech-detection-for-user-generated-content.p.rapidapi.com/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "a5fe97e320mshbe04253044f8b5cp15279ejsne4358a1be896",
      "X-RapidAPI-Host":
        "hate-speech-detection-for-user-generated-content.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const response = await axios.request(options);
  const data = response.data;
  return data;
};

export default isHateSpeech;

/*const hateWords = ["hate", "terror", "terrorist", "bomb", "bitch", "fuck"];

const isHateSpeech = async (text: string) => {
  const isHate = hateWords.some((word) => text.toLowerCase().includes(word));
  return isHate;
};
export default isHateSpeech;
*/
