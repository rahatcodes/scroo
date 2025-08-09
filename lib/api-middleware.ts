import aj, { shield, detectBot } from "./arcjet";

export const arcjetMiddleware = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "GOOGLE_CRAWLER"],
    })
  );