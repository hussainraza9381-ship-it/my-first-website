const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <body id="myBody" style="background: lightblue; text-align: center; font-family: Arial; padding-top: 80px;">
      <h1 style="color: darkblue;">Assalam-o-Alaikum Hussain!</h1>
      <h2>My first node server is up and running!</h2>
      <p>Press the button, the color will change!</p>
      <button onclick="changeColor()" style="padding: 15px 30px; font-size: 20px; background: green; color: white; border: none; border-radius: 10px; cursor: pointer;">Rang Badlo</button>
      <br><br>
      <input id="myName" type="text" placeholder="Apna Naam Likho" style="padding: 12px; font-size: 18px; border-radius: 10px; border: 1px solid gray;">
      <br><br>
      <button onclick="sayHello()" style="padding: 12px 25px; font-size: 18px; background: blue; color: white; border: none; border-radius: 10px; cursor: pointer;">Mujhe Salam Karo</button>
      <script>
        const colors = ['lightblue', 'lightgreen', 'yellow', 'pink', 'orange', 'purple', 'lightcoral'];
        let i = 0;
        function changeColor() {
          i = i + 1;
          if (i >= colors.length) { i = 0; }
          document.getElementById('myBody').style.background = colors[i];
          alert('Naya Rang: ' + colors[i]);
        }
        function sayHello() {
          let naam = document.getElementById('myName').value;
          if (naam == "") { naam = "Dost"; }
          alert('Assalam-o-Alaikum ' + naam + '! Tum Great Ho!');
        }
      </script>
    </body>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log('Server chal raha hai');
});
