getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const mood = document.createElement('div');
    const range = document.createElement('div');
    const date = document.createElement('div');
    const color = document.createElement('div');


    mood.textContent = `mood: ${item.mood}`;
    range.textContent = `range: ${item.range}`;
    color.textContent = `color: ${item.color}`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;

    root.append(date, mood, range, color);
    document.body.append(root);
  }
  console.log(data);
}  