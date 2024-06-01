//Update information

const button1 = document.getElementById('update');

button1.addEventListener('click', async (event) => {
  const mood = document.getElementById('mood').value;
  const range = document.getElementById('range').value;
  const color = document.getElementById('color').value;

  const data = { mood, range, color };
  
  localStorage.setItem('data', JSON.stringify(data));
  // console.log("localstorage: " + localStorage.getItem('data'));
  dispData();
  toggleLabel();
});

//Submit to the database
const button2 = document.getElementById('submit');

button2.addEventListener('click', async (event) => {
  const mood = document.getElementById('mood').value;
  const range = document.getElementById('range').value;
  const color = document.getElementById('color').value;

  const data = { mood, range, color };
  
 
  
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/api', options);
  const json = await response.json();
  // console.log(json);
});

//
//myfeelings review section
//
function dispData() {
  // console.log(JSON.parse(localStorage.getItem('data')));
  let { mood, range, color } = JSON.parse(localStorage.getItem('data'));
  var output = document.getElementById('output');
  output.innerHTML = `
  <table>
    <tbody>
      <tr>
        <td><b>feeling:</b></td>
        <td>${mood}</td>
      </tr>
      <tr>
        <td><b>strength:</b></td>
        <td>${range} out of 6</td>
      </tr> 
      <tr>
        <td><b>color:</b></td>
        <td><div class="box" style="background-color:${color}"></td>
      </tr>
    </tbody>
  </table>
  `
}

function toggleLabel() {
            const btn = 
                document.querySelector('button');
            if (btn.innerText === 'review') {
                btn.innerText = 'update';
            } else {
                btn.innerText = 'update again';
            }
        }