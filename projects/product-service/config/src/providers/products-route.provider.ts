import { APP_INITIALIZER } from '@angular/core';
import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eProductServiceRouteNames } from '../enums/route-names';

export const PRODUCT_SERVICE_PRODUCT_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/product-service/products',
        name: eProductServiceRouteNames.Products,
        parentName: eProductServiceRouteNames.ProductService,
        layout: eLayoutType.application,
        requiredPolicy: 'ProductService.Products',
      },
    ]);
  };
}
