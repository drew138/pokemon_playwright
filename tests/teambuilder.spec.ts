import { test, expect } from '@playwright/test';
import * as testData from '../data/team_data.json'
import { TeamBuilderPage } from '../pages/TeamBuilderPage';
import { HomePage } from '../pages/HomePage';

test('Sisi mijo ya', async ({ page }) => {
    const homePage = new HomePage(page)
    //const teamListPage = new TeamListPage(page)
    const teamBuilderPage = new TeamBuilderPage(page)
    //const pokemonDetailListPage = new PokemonDetailListPage(page)

    await homePage.navigate()
    await homePage.goToTeamBuilder()
    await teamBuilderPage.createNewTeam()

    await teamBuilderPage.selectFormat(testData.format, testData.gen)

    // for (const pokemon of testData.pokemons) {
    //     await teamBuilderPage.addPokemon(pokemon.name)
    //     await teamBuilderPage.selectItem(pokemon.item)
    //     await teamBuilderPage.selectMoves(pokemon.moves)
    //     await teamBuilderPage.selectEVStats(pokemon.evStats)
    // }
    
});

/*
test('test', async ({ page }) => {
  await page.goto('https://play.pokemonshowdown.com/');
  await page.getByRole('button', { name: 'Teambuilder' }).click();
  await page.getByRole('button', { name: ' New Team' }).click();
  await page.getByRole('button', { name: 'Select a format ' }).click();
  await page.locator('summary').filter({ hasText: 'B2/W2 Singles' }).click();
  await page.getByRole('button', { name: '[Gen 5] Ubers ' }).click();
  await page.getByRole('button', { name: ' Add Pokémon' }).click();
  await page.getByText('Uber Arceus MultitypeHP120').click();
  await page.locator('input[name="move1"]').click();
  await page.locator('input[name="move1"]').fill('Blizzard');
  await page.locator('input[name="move1"]').press('Enter');
  await page.locator('input[name="move2"]').fill('Avalanche');
  await page.locator('input[name="move2"]').press('Enter');
  await page.locator('input[name="move3"]').fill('Defog');
  await page.locator('input[name="move3"]').press('Enter');
  await page.locator('input[name="move4"]').fill('Calm Mind');
  await page.locator('input[name="move4"]').press('Enter');
  await page.locator('input[name="evslider-hp"]').fill('252');
  await page.locator('input[name="evslider-atk"]').fill('252');
  await page.locator('input[name="evslider-def"]').fill('252');
  await expect(page.getByText('0', { exact: true })).toBeVisible();
  await page.locator('input[name="item"]').click();
  await page.locator('input[name="item"]').fill('Eviolite');
  await page.locator('input[name="item"]').press('Enter');
  await page.locator('input[name="ability"]').press('Enter');
  await page.locator('input[name="move4"]').click();
  await page.locator('input[name="move4"]').press('Enter');
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('Uber Arceus-Fire').click();
  await page.locator('div').filter({ hasText: /^Moves$/ }).nth(1).click();
  await page.getByText('Blizzard Power120 Accuracy70').click();
  await page.getByText('Brick Break Power75').click();
  await page.locator('input[name="move3"]').click();
  await page.getByText('Dragon Claw Power80').click();
  await page.getByText('Avalanche Power60 Accuracy100').click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('Uber Arceus-Ground').click();
  await page.locator('input[name="move1"]').click();
  await page.getByText('Avalanche Power60 Accuracy100').click();
  await page.getByText('Draco Meteor Power140').click();
  await page.getByText('Dark Pulse Power80').click();
  await page.getByText('Dragon Pulse Power90').click();
  await page.locator('input[name="evslider-hp"]').fill('252');
  await page.locator('input[name="evslider-spa"]').fill('252');
  await page.locator('input[name="evslider-atk"]').fill('252');
  await page.getByRole('button', { name: ' Team' }).click();
  await page.getByRole('button', { name: ' Validate' }).click();
});
*/