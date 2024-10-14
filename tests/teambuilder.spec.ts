import { test, expect } from "@playwright/test";
import * as testData from "../data/team_data.json";
import { TeamBuilderPage } from "../pages/TeamBuilderPage";
import { TeamListPage } from "../pages/TeamListPage";
import { HomePage } from "../pages/HomePage";
import { PokemonBuilderPage } from "../pages/PokemonBuilderPage";
import { PokemonListPage } from "../pages/PokemonListPage";

test("should build pokemon team correctly", async ({ page }) => {
  const homePage = new HomePage(page);
  const teamListPage = new TeamListPage(page);
  const teamBuilderPage = new TeamBuilderPage(page);
  const pokemonListPage = new PokemonListPage(page);
  const pokemonBuilderPage = new PokemonBuilderPage(page);

  await homePage.navigate();
  await homePage.goToTeamBuilder();
  await teamListPage.createNewTeam();

  await teamBuilderPage.selectFormat(testData.format, testData.gen);

  for (const pokemon of testData.pokemons) {
    await teamBuilderPage.addPokemon();
    await pokemonListPage.selectPokemon(pokemon.name);

    await pokemonBuilderPage.selectAbility(pokemon.ability);
    await pokemonBuilderPage.selectItem(pokemon.item);
    await pokemonBuilderPage.selectMoves(pokemon.moves);
    await pokemonBuilderPage.selectEvStats(pokemon.evs);
    await pokemonBuilderPage.selectIvSpreadStats(pokemon.ivSpread);

    expect(pokemonBuilderPage.getRemainingEv()).toHaveText(
      testData.expectedRemainingEv,
    );

    await page.screenshot({ path: `${pokemon.name}.png` });

    await pokemonBuilderPage.returnToTeamBuilder();
  }

  expect(await teamListPage.validate()).toBe(
    testData.expectedValidationMessage,
  );
  await page.screenshot({ path: `team.png` });
});
