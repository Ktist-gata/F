const container = document.getElementById('info-container');

infoList.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h2');
  const link = document.createElement('a');
  link.href = `detail.html?id=${item.id}`;
  link.textContent = item.title;
  title.appendChild(link);

  const content = document.createElement('p');
  content.textContent = item.content;

  card.appendChild(title);
  card.appendChild(content);

  container.appendChild(card);
});
