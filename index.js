// import puppeteer from 'puppeteer';

const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://realsbet.com/casino?cmd=signin&path=loginMultichannel');
  // await page.screenshot({path: 'teste.png'})
  await page.setViewport({width: 1080, height: 800});
   
  // click para digitar usuario
  await page.type('#MULTICHANNEL', 'lbrandaodev@gmail.com');
  
  // click para digitar password
  // await page.click('#PASSWORD');
  await page.type('[name="PASSWORD"]', 'M1!minimizar');

  // clica botão login tela para entrar na conta 
  await page.click('#signIn');
    
  // // acessar page do aviator
  await page.goto('https://realsbet.com/virtual-game/Aviator');
  
  
  await page.waitForNavigation();


  // await page.click('#signIn');
     
  
  // await browser.close();
})();



