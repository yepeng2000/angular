var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from 'angular2/src/core/di';
import { isPresent, isBlank } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { RootRenderer, RenderComponentType } from 'angular2/src/core/render/api';
import { wtfCreateScope, wtfLeave } from '../profile/profile';
import { APP_ID } from 'angular2/src/core/application_tokens';
import { ViewType } from './view_type';
/**
 * Service exposing low level API for creating, moving and destroying Views.
 *
 * Most applications should use higher-level abstractions like {@link DynamicComponentLoader} and
 * {@link ViewContainerRef} instead.
 */
export class AppViewManager {
}
export let AppViewManager_ = class AppViewManager_ extends AppViewManager {
    constructor(_renderer, _appId) {
        super();
        this._renderer = _renderer;
        this._appId = _appId;
        this._nextCompTypeId = 0;
        /** @internal */
        this._createRootHostViewScope = wtfCreateScope('AppViewManager#createRootHostView()');
        /** @internal */
        this._destroyRootHostViewScope = wtfCreateScope('AppViewManager#destroyRootHostView()');
    }
    getViewContainer(location) {
        return location.internalElement.vcRef;
    }
    getHostElement(hostViewRef) {
        var hostView = hostViewRef.internalView;
        if (hostView.type !== ViewType.HOST) {
            throw new BaseException('This operation is only allowed on host views');
        }
        return hostView.getHostViewElement().ref;
    }
    getNamedElementInComponentView(hostLocation, variableName) {
        var appEl = hostLocation.internalElement;
        var componentView = appEl.componentView;
        if (isBlank(componentView)) {
            throw new BaseException(`There is no component directive at element ${hostLocation}`);
        }
        var el = componentView.namedAppElements[variableName];
        if (isPresent(el)) {
            return el.ref;
        }
        throw new BaseException(`Could not find variable ${variableName}`);
    }
    getComponent(hostLocation) {
        return hostLocation.internalElement.component;
    }
    createRootHostView(hostViewFactoryRef, overrideSelector, injector, projectableNodes = null) {
        var s = this._createRootHostViewScope();
        var hostViewFactory = hostViewFactoryRef.internalHostViewFactory;
        var selector = isPresent(overrideSelector) ? overrideSelector : hostViewFactory.selector;
        var view = hostViewFactory.viewFactory(this, injector, null);
        view.create(projectableNodes, selector);
        return wtfLeave(s, view.ref);
    }
    destroyRootHostView(hostViewRef) {
        var s = this._destroyRootHostViewScope();
        var hostView = hostViewRef.internalView;
        hostView.renderer.detachView(hostView.flatRootNodes);
        hostView.destroy();
        wtfLeave(s);
    }
    /**
     * Used by the generated code
     */
    createRenderComponentType(templateUrl, slotCount, encapsulation, styles) {
        return new RenderComponentType(`${this._appId}-${this._nextCompTypeId++}`, templateUrl, slotCount, encapsulation, styles);
    }
    /** @internal */
    renderComponent(renderComponentType) {
        return this._renderer.renderComponent(renderComponentType);
    }
};
AppViewManager_ = __decorate([
    Injectable(),
    __param(1, Inject(APP_ID)), 
    __metadata('design:paramtypes', [RootRenderer, String])
], AppViewManager_);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1yREMzdTVScC50bXAvYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7T0FBTyxFQUVMLE1BQU0sRUFFTixVQUFVLEVBR1gsTUFBTSxzQkFBc0I7T0FDdEIsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFnQixNQUFNLDBCQUEwQjtPQUNuRSxFQUFDLGFBQWEsRUFBQyxNQUFNLGdDQUFnQztPQVdyRCxFQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBVyxNQUFNLDhCQUE4QjtPQUNqRixFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQWEsTUFBTSxvQkFBb0I7T0FDaEUsRUFBQyxNQUFNLEVBQUMsTUFBTSxzQ0FBc0M7T0FFcEQsRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhO0FBRXBDOzs7OztHQUtHO0FBQ0g7QUF5RkEsQ0FBQztBQUdELDJEQUFxQyxjQUFjO0lBR2pELFlBQW9CLFNBQXVCLEVBQTBCLE1BQWM7UUFBSSxPQUFPLENBQUM7UUFBM0UsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUEwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRjNFLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBaUNwQyxnQkFBZ0I7UUFDaEIsNkJBQXdCLEdBQWUsY0FBYyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFZN0YsZ0JBQWdCO1FBQ2hCLDhCQUF5QixHQUFlLGNBQWMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBN0NDLENBQUM7SUFFakcsZ0JBQWdCLENBQUMsUUFBb0I7UUFDbkMsTUFBTSxDQUFlLFFBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxjQUFjLENBQUMsV0FBb0I7UUFDakMsSUFBSSxRQUFRLEdBQWMsV0FBWSxDQUFDLFlBQVks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OzttQkFKakQ7QUF5RVoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RvcixcbiAgSW5qZWN0LFxuICBQcm92aWRlcixcbiAgSW5qZWN0YWJsZSxcbiAgUmVzb2x2ZWRQcm92aWRlcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge2lzUHJlc2VudCwgaXNCbGFuaywgaXNBcnJheSwgVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7RWxlbWVudFJlZiwgRWxlbWVudFJlZl99IGZyb20gJy4vZWxlbWVudF9yZWYnO1xuaW1wb3J0IHtcbiAgSG9zdFZpZXdGYWN0b3J5UmVmLFxuICBIb3N0Vmlld0ZhY3RvcnlSZWZfLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEhvc3RWaWV3UmVmLFxuICBWaWV3UmVmLFxuICBWaWV3UmVmX1xufSBmcm9tICcuL3ZpZXdfcmVmJztcbmltcG9ydCB7Vmlld0NvbnRhaW5lclJlZiwgVmlld0NvbnRhaW5lclJlZl99IGZyb20gJy4vdmlld19jb250YWluZXJfcmVmJztcbmltcG9ydCB7Um9vdFJlbmRlcmVyLCBSZW5kZXJDb21wb25lbnRUeXBlLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaSc7XG5pbXBvcnQge3d0ZkNyZWF0ZVNjb3BlLCB3dGZMZWF2ZSwgV3RmU2NvcGVGbn0gZnJvbSAnLi4vcHJvZmlsZS9wcm9maWxlJztcbmltcG9ydCB7QVBQX0lEfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9hcHBsaWNhdGlvbl90b2tlbnMnO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldyc7XG5pbXBvcnQge1ZpZXdUeXBlfSBmcm9tICcuL3ZpZXdfdHlwZSc7XG5cbi8qKlxuICogU2VydmljZSBleHBvc2luZyBsb3cgbGV2ZWwgQVBJIGZvciBjcmVhdGluZywgbW92aW5nIGFuZCBkZXN0cm95aW5nIFZpZXdzLlxuICpcbiAqIE1vc3QgYXBwbGljYXRpb25zIHNob3VsZCB1c2UgaGlnaGVyLWxldmVsIGFic3RyYWN0aW9ucyBsaWtlIHtAbGluayBEeW5hbWljQ29tcG9uZW50TG9hZGVyfSBhbmRcbiAqIHtAbGluayBWaWV3Q29udGFpbmVyUmVmfSBpbnN0ZWFkLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXBwVmlld01hbmFnZXIge1xuICAvKipcbiAgICogUmV0dXJucyBhIHtAbGluayBWaWV3Q29udGFpbmVyUmVmfSBvZiB0aGUgVmlldyBDb250YWluZXIgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbi5cbiAgICovXG4gIGFic3RyYWN0IGdldFZpZXdDb250YWluZXIobG9jYXRpb246IEVsZW1lbnRSZWYpOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB7QGxpbmsgRWxlbWVudFJlZn0gdGhhdCBtYWtlcyB1cCB0aGUgc3BlY2lmaWVkIEhvc3QgVmlldy5cbiAgICovXG4gIGFic3RyYWN0IGdldEhvc3RFbGVtZW50KGhvc3RWaWV3UmVmOiBIb3N0Vmlld1JlZik6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIHRoZSBDb21wb25lbnQgVmlldyBvZiB0aGUgQ29tcG9uZW50IHNwZWNpZmllZCB2aWEgYGhvc3RMb2NhdGlvbmAgYW5kIHJldHVybnMgdGhlXG4gICAqIHtAbGluayBFbGVtZW50UmVmfSBmb3IgdGhlIEVsZW1lbnQgaWRlbnRpZmllZCB2aWEgYSBWYXJpYWJsZSBOYW1lIGB2YXJpYWJsZU5hbWVgLlxuICAgKlxuICAgKiBUaHJvd3MgYW4gZXhjZXB0aW9uIGlmIHRoZSBzcGVjaWZpZWQgYGhvc3RMb2NhdGlvbmAgaXMgbm90IGEgSG9zdCBFbGVtZW50IG9mIGEgQ29tcG9uZW50LCBvciBpZlxuICAgKiB2YXJpYWJsZSBgdmFyaWFibGVOYW1lYCBjb3VsZG4ndCBiZSBmb3VuZCBpbiB0aGUgQ29tcG9uZW50IFZpZXcgb2YgdGhpcyBDb21wb25lbnQuXG4gICAqL1xuICBhYnN0cmFjdCBnZXROYW1lZEVsZW1lbnRJbkNvbXBvbmVudFZpZXcoaG9zdExvY2F0aW9uOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lOiBzdHJpbmcpOiBFbGVtZW50UmVmO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wb25lbnQgaW5zdGFuY2UgZm9yIHRoZSBwcm92aWRlZCBIb3N0IEVsZW1lbnQuXG4gICAqL1xuICBhYnN0cmFjdCBnZXRDb21wb25lbnQoaG9zdExvY2F0aW9uOiBFbGVtZW50UmVmKTogYW55O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgQ29tcG9uZW50IGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgZ2xvYmFsIFZpZXdcbiAgICogKHVzdWFsbHkgRE9NIERvY3VtZW50KSB0aGF0IG1hdGNoZXMgdGhlIGNvbXBvbmVudCdzIHNlbGVjdG9yIG9yIGBvdmVycmlkZVNlbGVjdG9yYC5cbiAgICpcbiAgICogVGhpcyBhcyBhIGxvdy1sZXZlbCB3YXkgdG8gYm9vdHN0cmFwIGFuIGFwcGxpY2F0aW9uIGFuZCB1cGdyYWRlIGFuIGV4aXN0aW5nIEVsZW1lbnQgdG8gYVxuICAgKiBIb3N0IEVsZW1lbnQuIE1vc3QgYXBwbGljYXRpb25zIHNob3VsZCB1c2Uge0BsaW5rIER5bmFtaWNDb21wb25lbnRMb2FkZXIjbG9hZEFzUm9vdH0gaW5zdGVhZC5cbiAgICpcbiAgICogVGhlIENvbXBvbmVudCBhbmQgaXRzIFZpZXcgYXJlIGNyZWF0ZWQgYmFzZWQgb24gdGhlIGBob3N0UHJvdG9Db21wb25lbnRSZWZgIHdoaWNoIGNhbiBiZVxuICAgKiBvYnRhaW5lZFxuICAgKiBieSBjb21waWxpbmcgdGhlIGNvbXBvbmVudCB3aXRoIHtAbGluayBDb21waWxlciNjb21waWxlSW5Ib3N0fS5cbiAgICpcbiAgICogVXNlIHtAbGluayBBcHBWaWV3TWFuYWdlciNkZXN0cm95Um9vdEhvc3RWaWV3fSB0byBkZXN0cm95IHRoZSBjcmVhdGVkIENvbXBvbmVudCBhbmQgaXQncyBIb3N0XG4gICAqIFZpZXcuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYFxuICAgKiBAbmcuQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ2NoaWxkLWNvbXBvbmVudCdcbiAgICogfSlcbiAgICogQG5nLlZpZXcoe1xuICAgKiAgIHRlbXBsYXRlOiAnQ2hpbGQnXG4gICAqIH0pXG4gICAqIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAgICpcbiAgICogfVxuICAgKlxuICAgKiBAbmcuQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ215LWFwcCdcbiAgICogfSlcbiAgICogQG5nLlZpZXcoe1xuICAgKiAgIHRlbXBsYXRlOiBgXG4gICAqICAgICBQYXJlbnQgKDxzb21lLWNvbXBvbmVudD48L3NvbWUtY29tcG9uZW50PilcbiAgICogICBgXG4gICAqIH0pXG4gICAqIGNsYXNzIE15QXBwIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICogICB2aWV3UmVmOiBuZy5WaWV3UmVmO1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBWaWV3TWFuYWdlcjogbmcuQXBwVmlld01hbmFnZXIsIGNvbXBpbGVyOiBuZy5Db21waWxlcikge1xuICAgKiAgICAgY29tcGlsZXIuY29tcGlsZUluSG9zdChDaGlsZENvbXBvbmVudCkudGhlbigocHJvdG9WaWV3OiBuZy5Qcm90b0NvbXBvbmVudFJlZikgPT4ge1xuICAgKiAgICAgICB0aGlzLnZpZXdSZWYgPSBhcHBWaWV3TWFuYWdlci5jcmVhdGVSb290SG9zdFZpZXcocHJvdG9WaWV3LCAnc29tZS1jb21wb25lbnQnLCBudWxsKTtcbiAgICogICAgIH0pXG4gICAqICAgfVxuICAgKlxuICAgKiAgIG5nT25EZXN0cm95KCkge1xuICAgKiAgICAgdGhpcy5hcHBWaWV3TWFuYWdlci5kZXN0cm95Um9vdEhvc3RWaWV3KHRoaXMudmlld1JlZik7XG4gICAqICAgICB0aGlzLnZpZXdSZWYgPSBudWxsO1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBuZy5ib290c3RyYXAoTXlBcHApO1xuICAgKiBgYGBcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZVJvb3RIb3N0Vmlldyhob3N0Vmlld0ZhY3RvcnlSZWY6IEhvc3RWaWV3RmFjdG9yeVJlZiwgb3ZlcnJpZGVTZWxlY3Rvcjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0b3I6IEluamVjdG9yLCBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSk6IEhvc3RWaWV3UmVmO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgSG9zdCBWaWV3IGNyZWF0ZWQgdmlhIHtAbGluayBBcHBWaWV3TWFuYWdlciNjcmVhdGVSb290SG9zdFZpZXd9LlxuICAgKlxuICAgKiBBbG9uZyB3aXRoIHRoZSBIb3N0IFZpZXcsIHRoZSBDb21wb25lbnQgSW5zdGFuY2UgYXMgd2VsbCBhcyBhbGwgbmVzdGVkIFZpZXcgYW5kIENvbXBvbmVudHMgYXJlXG4gICAqIGRlc3Ryb3llZCBhcyB3ZWxsLlxuICAgKi9cbiAgYWJzdHJhY3QgZGVzdHJveVJvb3RIb3N0Vmlldyhob3N0Vmlld1JlZjogSG9zdFZpZXdSZWYpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVmlld01hbmFnZXJfIGV4dGVuZHMgQXBwVmlld01hbmFnZXIge1xuICBwcml2YXRlIF9uZXh0Q29tcFR5cGVJZDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUm9vdFJlbmRlcmVyLCBASW5qZWN0KEFQUF9JRCkgcHJpdmF0ZSBfYXBwSWQ6IHN0cmluZykgeyBzdXBlcigpOyB9XG5cbiAgZ2V0Vmlld0NvbnRhaW5lcihsb2NhdGlvbjogRWxlbWVudFJlZik6IFZpZXdDb250YWluZXJSZWYge1xuICAgIHJldHVybiAoPEVsZW1lbnRSZWZfPmxvY2F0aW9uKS5pbnRlcm5hbEVsZW1lbnQudmNSZWY7XG4gIH1cblxuICBnZXRIb3N0RWxlbWVudChob3N0Vmlld1JlZjogVmlld1JlZik6IEVsZW1lbnRSZWYge1xuICAgIHZhciBob3N0VmlldyA9ICg8Vmlld1JlZl8+aG9zdFZpZXdSZWYpLmludGVybmFsVmlldztcbiAgICBpZiAoaG9zdFZpZXcudHlwZSAhPT0gVmlld1R5cGUuSE9TVCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oJ1RoaXMgb3BlcmF0aW9uIGlzIG9ubHkgYWxsb3dlZCBvbiBob3N0IHZpZXdzJyk7XG4gICAgfVxuICAgIHJldHVybiBob3N0Vmlldy5nZXRIb3N0Vmlld0VsZW1lbnQoKS5yZWY7XG4gIH1cblxuICBnZXROYW1lZEVsZW1lbnRJbkNvbXBvbmVudFZpZXcoaG9zdExvY2F0aW9uOiBFbGVtZW50UmVmLCB2YXJpYWJsZU5hbWU6IHN0cmluZyk6IEVsZW1lbnRSZWYge1xuICAgIHZhciBhcHBFbCA9ICg8RWxlbWVudFJlZl8+aG9zdExvY2F0aW9uKS5pbnRlcm5hbEVsZW1lbnQ7XG4gICAgdmFyIGNvbXBvbmVudFZpZXcgPSBhcHBFbC5jb21wb25lbnRWaWV3O1xuICAgIGlmIChpc0JsYW5rKGNvbXBvbmVudFZpZXcpKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgVGhlcmUgaXMgbm8gY29tcG9uZW50IGRpcmVjdGl2ZSBhdCBlbGVtZW50ICR7aG9zdExvY2F0aW9ufWApO1xuICAgIH1cbiAgICB2YXIgZWwgPSBjb21wb25lbnRWaWV3Lm5hbWVkQXBwRWxlbWVudHNbdmFyaWFibGVOYW1lXTtcbiAgICBpZiAoaXNQcmVzZW50KGVsKSkge1xuICAgICAgcmV0dXJuIGVsLnJlZjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYENvdWxkIG5vdCBmaW5kIHZhcmlhYmxlICR7dmFyaWFibGVOYW1lfWApO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50KGhvc3RMb2NhdGlvbjogRWxlbWVudFJlZik6IGFueSB7XG4gICAgcmV0dXJuICg8RWxlbWVudFJlZl8+aG9zdExvY2F0aW9uKS5pbnRlcm5hbEVsZW1lbnQuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY3JlYXRlUm9vdEhvc3RWaWV3U2NvcGU6IFd0ZlNjb3BlRm4gPSB3dGZDcmVhdGVTY29wZSgnQXBwVmlld01hbmFnZXIjY3JlYXRlUm9vdEhvc3RWaWV3KCknKTtcblxuICBjcmVhdGVSb290SG9zdFZpZXcoaG9zdFZpZXdGYWN0b3J5UmVmOiBIb3N0Vmlld0ZhY3RvcnlSZWYsIG92ZXJyaWRlU2VsZWN0b3I6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgIGluamVjdG9yOiBJbmplY3RvciwgcHJvamVjdGFibGVOb2RlczogYW55W11bXSA9IG51bGwpOiBIb3N0Vmlld1JlZiB7XG4gICAgdmFyIHMgPSB0aGlzLl9jcmVhdGVSb290SG9zdFZpZXdTY29wZSgpO1xuICAgIHZhciBob3N0Vmlld0ZhY3RvcnkgPSAoPEhvc3RWaWV3RmFjdG9yeVJlZl8+aG9zdFZpZXdGYWN0b3J5UmVmKS5pbnRlcm5hbEhvc3RWaWV3RmFjdG9yeTtcbiAgICB2YXIgc2VsZWN0b3IgPSBpc1ByZXNlbnQob3ZlcnJpZGVTZWxlY3RvcikgPyBvdmVycmlkZVNlbGVjdG9yIDogaG9zdFZpZXdGYWN0b3J5LnNlbGVjdG9yO1xuICAgIHZhciB2aWV3ID0gaG9zdFZpZXdGYWN0b3J5LnZpZXdGYWN0b3J5KHRoaXMsIGluamVjdG9yLCBudWxsKTtcbiAgICB2aWV3LmNyZWF0ZShwcm9qZWN0YWJsZU5vZGVzLCBzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHd0ZkxlYXZlKHMsIHZpZXcucmVmKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Rlc3Ryb3lSb290SG9zdFZpZXdTY29wZTogV3RmU2NvcGVGbiA9IHd0ZkNyZWF0ZVNjb3BlKCdBcHBWaWV3TWFuYWdlciNkZXN0cm95Um9vdEhvc3RWaWV3KCknKTtcblxuICBkZXN0cm95Um9vdEhvc3RWaWV3KGhvc3RWaWV3UmVmOiBWaWV3UmVmKSB7XG4gICAgdmFyIHMgPSB0aGlzLl9kZXN0cm95Um9vdEhvc3RWaWV3U2NvcGUoKTtcbiAgICB2YXIgaG9zdFZpZXcgPSAoPFZpZXdSZWZfPmhvc3RWaWV3UmVmKS5pbnRlcm5hbFZpZXc7XG4gICAgaG9zdFZpZXcucmVuZGVyZXIuZGV0YWNoVmlldyhob3N0Vmlldy5mbGF0Um9vdE5vZGVzKTtcbiAgICBob3N0Vmlldy5kZXN0cm95KCk7XG4gICAgd3RmTGVhdmUocyk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgZ2VuZXJhdGVkIGNvZGVcbiAgICovXG4gIGNyZWF0ZVJlbmRlckNvbXBvbmVudFR5cGUodGVtcGxhdGVVcmw6IHN0cmluZywgc2xvdENvdW50OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBBcnJheTxzdHJpbmcgfCBhbnlbXT4pOiBSZW5kZXJDb21wb25lbnRUeXBlIHtcbiAgICByZXR1cm4gbmV3IFJlbmRlckNvbXBvbmVudFR5cGUoYCR7dGhpcy5fYXBwSWR9LSR7dGhpcy5fbmV4dENvbXBUeXBlSWQrK31gLCB0ZW1wbGF0ZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdENvdW50LCBlbmNhcHN1bGF0aW9uLCBzdHlsZXMpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZW5kZXJDb21wb25lbnQocmVuZGVyQ29tcG9uZW50VHlwZTogUmVuZGVyQ29tcG9uZW50VHlwZSk6IFJlbmRlcmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KHJlbmRlckNvbXBvbmVudFR5cGUpO1xuICB9XG59XG4iXX0=