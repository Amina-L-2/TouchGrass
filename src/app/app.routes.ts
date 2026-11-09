import { Routes } from '@angular/router';
import { TouchGrassComponent } from './touch-grass/touch-grass.component';
import { CasesComponent } from './cases/cases.component';

import { ImportanceComponent } from './importance/importance.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: TouchGrassComponent,
        pathMatch: 'full'
    },
    {
        path: 'importance',
        component: ImportanceComponent
    },
    {
        path: 'cases',
        component: CasesComponent
    },
]