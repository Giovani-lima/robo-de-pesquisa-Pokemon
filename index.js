const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const pokedesejado = readlineSync.question('Informe o pokemon: ');

  const sitedesejado = `https://pokemon.fandom.com/pt-br/wiki/${pokedesejado}`;
  await page.goto(sitedesejado);

  await page.evaluate(() => {
    window.scrollTo(0, 1000);
  });
  await page.screenshot({path: 'resuldado.png'});

  await browser.close();
}

robo();