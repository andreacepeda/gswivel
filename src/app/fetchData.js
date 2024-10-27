import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'yourProjectId',
    dataset: 'yourDataset',
    useCdn: true,
});

const query = '*[_type == "yourDocumentType"]';

client.fetch(query).then((data) => {
    const container = document.getElementById('data-container');
  
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('item');
      div.innerHTML = `
        <h3>${item.title}</h3>
        <img src="${item.image.asset.url}" alt="${item.title}">
      `;
      container.appendChild(div);
    });
  });
  