import {en, pt} from './content';

document.getElementById('enSelect').addEventListener('click', englishWebsite);

document.getElementById('ptSelect').addEventListener('click', portuguesehWebsite);

function englishWebsite () {
  const enKeys = Object.keys(en);
  for (const key of enKeys) {
    document.getElementById(key).innerHTML = en[key];
    document.getElementById('clientsClients').classList.remove('smallerTitle');
  }
};

function portuguesehWebsite () {
  const ptKeys = Object.keys(pt);
  for (const key of ptKeys) {
    document.getElementById(key).innerHTML = pt[key];
    document.getElementById('clientsClients').classList.add('smallerTitle');
  }
};

