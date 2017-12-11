const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()

  await page.goto('https://www.google.co.jp')

  await page.focus('#lst-ib')
  await page.keyboard.type('puppeteer')

  await page.screenshot({path: '/output/keyword_input.png'})

  await page.keyboard.press('Enter')
  await page.waitForNavigation()
  await page.screenshot({path: '/output/search_result.png'})

  await browser.close()
})()
