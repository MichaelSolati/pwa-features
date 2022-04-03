import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './services/toast.service';

const PROVIDERS = [ToastService];

@NgModule({
  providers: PROVIDERS,
  imports: [CommonModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: PROVIDERS,
    };
  }
}
