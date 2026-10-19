import { expect, test } from '@playwright/test'

test('front page displays Ivysaur and the Nintendo trademark', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('ivysaur')).toBeVisible()
  await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
})

test('clicking Ivysaur opens its page and displays chlorophyll', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'ivysaur' }).click()

  await expect(page).toHaveURL(/\/pokemon\/ivysaur$/)
  await expect(page.getByText('chlorophyll')).toBeVisible()
})
