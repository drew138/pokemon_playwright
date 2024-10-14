import { Page, Locator } from "@playwright/test";

export class PokemonListPage {
  readonly page: Page;
  readonly pokemonSearchBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pokemonSearchBar = page.locator('input[name="pokemon"]');
  }

  async selectPokemon(pokemonName: string) {
    await this.pokemonSearchBar.click();
    await this.pokemonSearchBar.pressSequentially(pokemonName);
    await this.pokemonSearchBar.press("Enter");
  }
}
