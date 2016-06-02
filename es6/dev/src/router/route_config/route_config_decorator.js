import { RouteConfig as RouteConfigAnnotation } from './route_config_impl';
import { makeDecorator } from 'angular2/src/core/util/decorators';
export { Route, Redirect, AuxRoute, AsyncRoute } from './route_config_impl';
// Copied from RouteConfig in route_config_impl.
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 */
export var RouteConfig = makeDecorator(RouteConfigAnnotation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfY29uZmlnX2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtckRDM3U1UnAudG1wL2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVfY29uZmlnL3JvdXRlX2NvbmZpZ19kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxXQUFXLElBQUkscUJBQXFCLEVBQWtCLE1BQU0scUJBQXFCO09BQ2xGLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUNBQW1DO0FBRS9ELFNBQVEsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxRQUF3QixxQkFBcUIsQ0FBQztBQUUzRixnREFBZ0Q7QUFDaEQ7Ozs7R0FJRztBQUNILE9BQU8sSUFBSSxXQUFXLEdBQ2xCLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZUNvbmZpZyBhcyBSb3V0ZUNvbmZpZ0Fubm90YXRpb24sIFJvdXRlRGVmaW5pdGlvbn0gZnJvbSAnLi9yb3V0ZV9jb25maWdfaW1wbCc7XG5pbXBvcnQge21ha2VEZWNvcmF0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3V0aWwvZGVjb3JhdG9ycyc7XG5cbmV4cG9ydCB7Um91dGUsIFJlZGlyZWN0LCBBdXhSb3V0ZSwgQXN5bmNSb3V0ZSwgUm91dGVEZWZpbml0aW9ufSBmcm9tICcuL3JvdXRlX2NvbmZpZ19pbXBsJztcblxuLy8gQ29waWVkIGZyb20gUm91dGVDb25maWcgaW4gcm91dGVfY29uZmlnX2ltcGwuXG4vKipcbiAqIFRoZSBgUm91dGVDb25maWdgIGRlY29yYXRvciBkZWZpbmVzIHJvdXRlcyBmb3IgYSBnaXZlbiBjb21wb25lbnQuXG4gKlxuICogSXQgdGFrZXMgYW4gYXJyYXkgb2Yge0BsaW5rIFJvdXRlRGVmaW5pdGlvbn1zLlxuICovXG5leHBvcnQgdmFyIFJvdXRlQ29uZmlnOiAoY29uZmlnczogUm91dGVEZWZpbml0aW9uW10pID0+IENsYXNzRGVjb3JhdG9yID1cbiAgICBtYWtlRGVjb3JhdG9yKFJvdXRlQ29uZmlnQW5ub3RhdGlvbik7XG4iXX0=