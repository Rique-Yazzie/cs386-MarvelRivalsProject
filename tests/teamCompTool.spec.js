const { test, expect } = require('@playwright/test');

test('Checking Adam Warlock hero selection updates selected hero text', async ({ page }) => {
  // Go to the page
  await page.goto('http://localhost:3000/teamCompTool.html');

  // Click the hero (e.g., Adam Warlock)
  await page.getByText('Adam Warlock').click();

  // Check that the selected hero output shows "Adam Warlock"
  const selectedHero = await page.locator('#selected-hero'); // Assuming your output has id="selected-hero"
  await expect(selectedHero).toHaveText('Adam Warlock');
});
