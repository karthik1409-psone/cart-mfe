import { RouterModule } from '@angular/router';

const routes = [
    {
        path:'',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    }
];

export default RouterModule.forRoot(routes);