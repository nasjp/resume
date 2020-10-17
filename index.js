import mtp from "md-to-pdf";

mtp("./resume.md", { dest: "resume.pdf" }).then(() => {
  console.log("mtp Done");
});
