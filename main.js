let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #008ba5;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #008ba5;">Soy instructora de Tecnolochicas y estudio una carrera STEM.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
