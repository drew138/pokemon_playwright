import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly teamBuilderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.teamBuilderButton = page.getByRole('button', { name: 'teambuilder' });
  }

  async navigate() {
    await this.page.goto('https://play.pokemonshowdown.com/');
  }

  async goToTeamBuilder() {
    await this.teamBuilderButton.click();
  }
}

