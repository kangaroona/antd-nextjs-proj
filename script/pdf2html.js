const pdf2html = require("pdf2html");
(async () => {
  const html = await pdf2html.html(
    "/Users/nazhao/Downloads/senior-web-developer-resume-example.pdf"
  );
  console.log(html);
})();
