import { Page, Locator } from '@playwright/test';

export class TeamBuilderPage {
  readonly page: Page;
  readonly newTeamButton: Locator;
  readonly formatButton: Locator;
  readonly formatInput: Locator;
  readonly selectedFormatButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTeamButton = page.locator('button[value="team"]');
    this.formatButton = page.locator('li[class="format-select"]/button[name="format"]');
    this.selectedFormatButton;
  }

  async createNewTeam() {
    await this.newTeamButton.click();
  }

  async selectFormat(format: string, gen: string) {
      await this.formatButton.click()
      let formatInput = (gen.toLowerCase() + format.toLowerCase()).replace(" ", "");


  }

  setSelectedFormatButton(format: string, gen: string) {
    this.selectedFormatButton = this.page.locator('input[name="search"]');
  }
}

