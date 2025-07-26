import { translateText } from './translateText';

export const translateWholePage = async (targetLang = "hi") => {
  const elements = document.querySelectorAll("h1, h2, h3, p, span, button, a");

  for (const el of elements) {
    if (el.childNodes.length === 1 && el.innerText.trim() !== "") {
      const originalText = el.innerText;
      try {
        const translated = await translateText(originalText, targetLang);
        el.innerText = translated;
      } catch (err) {
        console.error("Translation failed for:", originalText);
      }
    }
  }
};
