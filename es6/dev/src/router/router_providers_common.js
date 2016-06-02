import { LocationStrategy, PathLocationStrategy, Location } from 'angular2/platform/common';
import { Router, RootRouter } from 'angular2/src/router/router';
import { RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/src/router/route_registry';
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { ApplicationRef, Provider } from 'angular2/core';
import { BaseException } from 'angular2/src/facade/exceptions';
/**
 * The Platform agnostic ROUTER PROVIDERS
 */
export const ROUTER_PROVIDERS_COMMON = CONST_EXPR([
    RouteRegistry,
    CONST_EXPR(new Provider(LocationStrategy, { useClass: PathLocationStrategy })),
    Location,
    CONST_EXPR(new Provider(Router, {
        useFactory: routerFactory,
        deps: CONST_EXPR([RouteRegistry, Location, ROUTER_PRIMARY_COMPONENT, ApplicationRef])
    })),
    CONST_EXPR(new Provider(ROUTER_PRIMARY_COMPONENT, { useFactory: routerPrimaryComponentFactory, deps: CONST_EXPR([ApplicationRef]) }))
]);
function routerFactory(registry, location, primaryComponent, appRef) {
    var rootRouter = new RootRouter(registry, location, primaryComponent);
    appRef.registerDisposeListener(() => rootRouter.dispose());
    return rootRouter;
}
function routerPrimaryComponentFactory(app) {
    if (app.componentTypes.length == 0) {
        throw new BaseException("Bootstrap at least one component before injecting Router.");
    }
    return app.componentTypes[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVyc19jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXJEQzN1NVJwLnRtcC9hbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFDLE1BQU0sMEJBQTBCO09BQ2xGLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLDRCQUE0QjtPQUN0RCxFQUFDLGFBQWEsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQztPQUNuRixFQUFDLFVBQVUsRUFBTyxNQUFNLDBCQUEwQjtPQUNsRCxFQUFDLGNBQWMsRUFBZSxRQUFRLEVBQUMsTUFBTSxlQUFlO09BQzVELEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBRTVEOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHVCQUF1QixHQUFVLFVBQVUsQ0FBQztJQUN2RCxhQUFhO0lBQ2IsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFDLENBQUMsQ0FBQztJQUM1RSxRQUFRO0lBQ1IsVUFBVSxDQUFDLElBQUksUUFBUSxDQUNuQixNQUFNLEVBQ047UUFDRSxVQUFVLEVBQUUsYUFBYTtRQUN6QixJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN0RixDQUFDLENBQUM7SUFDUCxVQUFVLENBQUMsSUFBSSxRQUFRLENBQ25CLHdCQUF3QixFQUN4QixFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7Q0FDdEYsQ0FBQyxDQUFDO0FBRUgsdUJBQXVCLFFBQXVCLEVBQUUsUUFBa0IsRUFBRSxnQkFBc0IsRUFDbkUsTUFBc0I7SUFDM0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVELHVDQUF1QyxHQUFtQjtJQUN4RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxhQUFhLENBQUMsMkRBQTJELENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9ufSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXIsIFJvb3RSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7Um91dGVSZWdpc3RyeSwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UfSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlX3JlZ2lzdHJ5JztcbmltcG9ydCB7Q09OU1RfRVhQUiwgVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QXBwbGljYXRpb25SZWYsIE9wYXF1ZVRva2VuLCBQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5cbi8qKlxuICogVGhlIFBsYXRmb3JtIGFnbm9zdGljIFJPVVRFUiBQUk9WSURFUlNcbiAqL1xuZXhwb3J0IGNvbnN0IFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OOiBhbnlbXSA9IENPTlNUX0VYUFIoW1xuICBSb3V0ZVJlZ2lzdHJ5LFxuICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IFBhdGhMb2NhdGlvblN0cmF0ZWd5fSkpLFxuICBMb2NhdGlvbixcbiAgQ09OU1RfRVhQUihuZXcgUHJvdmlkZXIoXG4gICAgICBSb3V0ZXIsXG4gICAgICB7XG4gICAgICAgIHVzZUZhY3Rvcnk6IHJvdXRlckZhY3RvcnksXG4gICAgICAgIGRlcHM6IENPTlNUX0VYUFIoW1JvdXRlUmVnaXN0cnksIExvY2F0aW9uLCBST1VURVJfUFJJTUFSWV9DT01QT05FTlQsIEFwcGxpY2F0aW9uUmVmXSlcbiAgICAgIH0pKSxcbiAgQ09OU1RfRVhQUihuZXcgUHJvdmlkZXIoXG4gICAgICBST1VURVJfUFJJTUFSWV9DT01QT05FTlQsXG4gICAgICB7dXNlRmFjdG9yeTogcm91dGVyUHJpbWFyeUNvbXBvbmVudEZhY3RvcnksIGRlcHM6IENPTlNUX0VYUFIoW0FwcGxpY2F0aW9uUmVmXSl9KSlcbl0pO1xuXG5mdW5jdGlvbiByb3V0ZXJGYWN0b3J5KHJlZ2lzdHJ5OiBSb3V0ZVJlZ2lzdHJ5LCBsb2NhdGlvbjogTG9jYXRpb24sIHByaW1hcnlDb21wb25lbnQ6IFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgIGFwcFJlZjogQXBwbGljYXRpb25SZWYpOiBSb290Um91dGVyIHtcbiAgdmFyIHJvb3RSb3V0ZXIgPSBuZXcgUm9vdFJvdXRlcihyZWdpc3RyeSwgbG9jYXRpb24sIHByaW1hcnlDb21wb25lbnQpO1xuICBhcHBSZWYucmVnaXN0ZXJEaXNwb3NlTGlzdGVuZXIoKCkgPT4gcm9vdFJvdXRlci5kaXNwb3NlKCkpO1xuICByZXR1cm4gcm9vdFJvdXRlcjtcbn1cblxuZnVuY3Rpb24gcm91dGVyUHJpbWFyeUNvbXBvbmVudEZhY3RvcnkoYXBwOiBBcHBsaWNhdGlvblJlZik6IFR5cGUge1xuICBpZiAoYXBwLmNvbXBvbmVudFR5cGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXCJCb290c3RyYXAgYXQgbGVhc3Qgb25lIGNvbXBvbmVudCBiZWZvcmUgaW5qZWN0aW5nIFJvdXRlci5cIik7XG4gIH1cbiAgcmV0dXJuIGFwcC5jb21wb25lbnRUeXBlc1swXTtcbn1cbiJdfQ==