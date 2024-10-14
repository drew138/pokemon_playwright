import { Page, Locator } from "@playwright/test";

export class PokemonBuilderPage {
  readonly page: Page;
  readonly itemSearchBar: Locator;
  readonly abilitySearchBar: Locator;
  readonly itemMoveBars: Locator;
  readonly nameStatsButton: Locator;
  readonly evStats: { [key: string]: Locator };
  readonly remainingEv: Locator;
  readonly ivSpreadStats: Locator;
  readonly backToTeamBuilderButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.itemSearchBar = page.locator('input[name="item"]');
    this.abilitySearchBar = page.locator('input[name="ability"]');
    this.itemMoveBars = page.locator('input[name^="move"]');
    this.nameStatsButton = page.locator('button[name="stats"]');
    this.evStats = {
      hp: page.locator('input[name="stat-hp"]'),
      atk: page.locator('input[name="stat-atk"]'),
      def: page.locator('input[name="stat-def"]'),
      spa: page.locator('input[name="stat-spa"]'),
      spd: page.locator('input[name="stat-spd"]'),
      spe: page.locator('input[name="stat-spe"]'),
    };
    this.ivSpreadStats = page.locator('select[name="ivspread"]');
    this.remainingEv = page.locator("div.totalev em");

    this.backToTeamBuilderButton = page.locator('button[name="back"]');
  }

  async selectAbility(ability: string) {
    await this.abilitySearchBar.click();
    await this.abilitySearchBar.clear();
    await this.abilitySearchBar.pressSequentially(ability);
  }

  async selectItem(item: string) {
    await this.itemSearchBar.clear();
    await this.itemSearchBar.pressSequentially(item);
  }

  async fillMoveInput(index: number, value: string) {
    await this.itemMoveBars.nth(index).pressSequentially(value);
  }

  async selectMoves(values: string[]) {
    for (let i = 0; i < values.length; i++) {
      await this.fillMoveInput(i, values[i]);
    }
  }

  async selectEvStats(evs: { [key: string]: number }) {
    await this.nameStatsButton.click();
    for (const key in evs) {
      await this.evStats[key].pressSequentially(evs[key].toString());
    }
  }

  async selectIvSpreadStats(evs: string) {
    await this.nameStatsButton.click();
    await this.ivSpreadStats.selectOption(evs);
  }

  async returnToTeamBuilder() {
    await this.backToTeamBuilderButton.click();
  }

  getRemainingEv(): Locator {
    return this.remainingEv;
  }
}
