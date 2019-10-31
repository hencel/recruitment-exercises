document.addEventListener("DOMContentLoaded", function() {
  let pass = '';
  const correct_pass = 'injects3crets';
  const api = 'https://api.github.com/repos/elixir-lang/elixir/issues';
  let lastKeyTime = Date.now();
  
  document.addEventListener('keydown', function(key) {
    
    setInterval(function(){ pass = ''; }, 15000);

    pass += String.fromCharCode(key.which).toLowerCase();

    if(key.which == 73) {
      pass = 'i'
    }
    if(key.which == 27) {
      pass = '';
    }
    const currentTime = Date.now();

    if (currentTime - lastKeyTime > 5000) {
      pass = '';
    }
    lastKeyTime = currentTime;

    if(pass == correct_pass) {
      fetch(api)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        for(let i=0; i<5; i++) {
          console.log(data[i].user.login);
          const section = document.querySelector('section');
          let textLine = document.createElement('p');
          textLine.innerHTML = data[i].user.login;
          textLine.classList.add('textLine');
          section.appendChild(textLine);
          setTimeout(function() {
            document.querySelector('.textLine').remove();
          }, 15000)
        }
      })
    }
  })
  
});
