import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsService } from './services/groups.service';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [],
  exports: [CommonModule],
  providers: [GroupsService, SettingsService]
})
export class SharedModule {}
