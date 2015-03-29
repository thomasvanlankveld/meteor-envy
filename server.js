/** Add red border style to environment @ development */
if (process.env.NODE_ENV === "development") {
  process.env.STYLE = "body { border: 5px solid red; margin: 0; }";
}

/** Expose STYLE to client */
allowEnv({
  STYLE: 1
})
