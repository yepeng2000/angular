'use strict';"use strict";
var compile_metadata_1 = require('./compile_metadata');
var view_1 = require('angular2/src/core/linker/view');
var debug_context_1 = require('angular2/src/core/linker/debug_context');
var view_utils_1 = require('angular2/src/core/linker/view_utils');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var view_manager_1 = require('angular2/src/core/linker/view_manager');
var element_1 = require('angular2/src/core/linker/element');
var element_ref_1 = require('angular2/src/core/linker/element_ref');
var view_container_ref_1 = require('angular2/src/core/linker/view_container_ref');
var api_1 = require('angular2/src/core/render/api');
var view_2 = require('angular2/src/core/metadata/view');
var view_type_1 = require('angular2/src/core/linker/view_type');
var linker_1 = require('angular2/src/core/linker');
var injector_1 = require('angular2/src/core/di/injector');
var template_ref_1 = require('angular2/src/core/linker/template_ref');
var util_1 = require('./util');
var APP_VIEW_MODULE_URL = 'asset:angular2/lib/src/core/linker/view' + util_1.MODULE_SUFFIX;
var VIEW_UTILS_MODULE_URL = 'asset:angular2/lib/src/core/linker/view_utils' + util_1.MODULE_SUFFIX;
var CD_MODULE_URL = 'asset:angular2/lib/src/core/change_detection/change_detection' + util_1.MODULE_SUFFIX;
// Reassign the imports to different variables so we can
// define static variables with the name of the import.
// (only needed for Dart).
var impAppViewManager_ = view_manager_1.AppViewManager_;
var impAppView = view_1.AppView;
var impDebugAppView = view_1.DebugAppView;
var impDebugContext = debug_context_1.DebugContext;
var impAppElement = element_1.AppElement;
var impElementRef = element_ref_1.ElementRef;
var impViewContainerRef = view_container_ref_1.ViewContainerRef;
var impChangeDetectorRef = change_detection_1.ChangeDetectorRef;
var impRenderComponentType = api_1.RenderComponentType;
var impQueryList = linker_1.QueryList;
var impTemplateRef = template_ref_1.TemplateRef;
var impTemplateRef_ = template_ref_1.TemplateRef_;
var impValueUnwrapper = change_detection_1.ValueUnwrapper;
var impInjector = injector_1.Injector;
var impViewEncapsulation = view_2.ViewEncapsulation;
var impViewType = view_type_1.ViewType;
var impChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
var impStaticNodeDebugInfo = debug_context_1.StaticNodeDebugInfo;
var impRenderer = api_1.Renderer;
var impSimpleChange = change_detection_1.SimpleChange;
var impUninitialized = change_detection_1.uninitialized;
var impChangeDetectorState = change_detection_1.ChangeDetectorState;
var impFlattenNestedViewRenderNodes = view_utils_1.flattenNestedViewRenderNodes;
var impDevModeEqual = change_detection_1.devModeEqual;
var impInterpolate = view_utils_1.interpolate;
var impCheckBinding = view_utils_1.checkBinding;
var Identifiers = (function () {
    function Identifiers() {
    }
    Identifiers.AppViewManager_ = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'AppViewManager_',
        moduleUrl: 'asset:angular2/lib/src/core/linker/view_manager' + util_1.MODULE_SUFFIX,
        runtime: impAppViewManager_
    });
    Identifiers.AppView = new compile_metadata_1.CompileIdentifierMetadata({ name: 'AppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impAppView });
    Identifiers.DebugAppView = new compile_metadata_1.CompileIdentifierMetadata({ name: 'DebugAppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impDebugAppView });
    Identifiers.AppElement = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'AppElement',
        moduleUrl: 'asset:angular2/lib/src/core/linker/element' + util_1.MODULE_SUFFIX,
        runtime: impAppElement
    });
    Identifiers.ElementRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ElementRef',
        moduleUrl: 'asset:angular2/lib/src/core/linker/element_ref' + util_1.MODULE_SUFFIX,
        runtime: impElementRef
    });
    Identifiers.ViewContainerRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ViewContainerRef',
        moduleUrl: 'asset:angular2/lib/src/core/linker/view_container_ref' + util_1.MODULE_SUFFIX,
        runtime: impViewContainerRef
    });
    Identifiers.ChangeDetectorRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ChangeDetectorRef',
        moduleUrl: 'asset:angular2/lib/src/core/change_detection/change_detector_ref' + util_1.MODULE_SUFFIX,
        runtime: impChangeDetectorRef
    });
    Identifiers.RenderComponentType = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'RenderComponentType',
        moduleUrl: 'asset:angular2/lib/src/core/render/api' + util_1.MODULE_SUFFIX,
        runtime: impRenderComponentType
    });
    Identifiers.QueryList = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'QueryList',
        moduleUrl: 'asset:angular2/lib/src/core/linker/query_list' + util_1.MODULE_SUFFIX,
        runtime: impQueryList
    });
    Identifiers.TemplateRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'TemplateRef',
        moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + util_1.MODULE_SUFFIX,
        runtime: impTemplateRef
    });
    Identifiers.TemplateRef_ = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'TemplateRef_',
        moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + util_1.MODULE_SUFFIX,
        runtime: impTemplateRef_
    });
    Identifiers.ValueUnwrapper = new compile_metadata_1.CompileIdentifierMetadata({ name: 'ValueUnwrapper', moduleUrl: CD_MODULE_URL, runtime: impValueUnwrapper });
    Identifiers.Injector = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'Injector',
        moduleUrl: "asset:angular2/lib/src/core/di/injector" + util_1.MODULE_SUFFIX,
        runtime: impInjector
    });
    Identifiers.ViewEncapsulation = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ViewEncapsulation',
        moduleUrl: 'asset:angular2/lib/src/core/metadata/view' + util_1.MODULE_SUFFIX,
        runtime: impViewEncapsulation
    });
    Identifiers.ViewType = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ViewType',
        moduleUrl: "asset:angular2/lib/src/core/linker/view_type" + util_1.MODULE_SUFFIX,
        runtime: impViewType
    });
    Identifiers.ChangeDetectionStrategy = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ChangeDetectionStrategy',
        moduleUrl: CD_MODULE_URL,
        runtime: impChangeDetectionStrategy
    });
    Identifiers.StaticNodeDebugInfo = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'StaticNodeDebugInfo',
        moduleUrl: "asset:angular2/lib/src/core/linker/debug_context" + util_1.MODULE_SUFFIX,
        runtime: impStaticNodeDebugInfo
    });
    Identifiers.DebugContext = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'DebugContext',
        moduleUrl: "asset:angular2/lib/src/core/linker/debug_context" + util_1.MODULE_SUFFIX,
        runtime: impDebugContext
    });
    Identifiers.Renderer = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'Renderer',
        moduleUrl: 'asset:angular2/lib/src/core/render/api' + util_1.MODULE_SUFFIX,
        runtime: impRenderer
    });
    Identifiers.SimpleChange = new compile_metadata_1.CompileIdentifierMetadata({ name: 'SimpleChange', moduleUrl: CD_MODULE_URL, runtime: impSimpleChange });
    Identifiers.uninitialized = new compile_metadata_1.CompileIdentifierMetadata({ name: 'uninitialized', moduleUrl: CD_MODULE_URL, runtime: impUninitialized });
    Identifiers.ChangeDetectorState = new compile_metadata_1.CompileIdentifierMetadata({ name: 'ChangeDetectorState', moduleUrl: CD_MODULE_URL, runtime: impChangeDetectorState });
    Identifiers.checkBinding = new compile_metadata_1.CompileIdentifierMetadata({ name: 'checkBinding', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCheckBinding });
    Identifiers.flattenNestedViewRenderNodes = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'flattenNestedViewRenderNodes',
        moduleUrl: VIEW_UTILS_MODULE_URL,
        runtime: impFlattenNestedViewRenderNodes
    });
    Identifiers.devModeEqual = new compile_metadata_1.CompileIdentifierMetadata({ name: 'devModeEqual', moduleUrl: CD_MODULE_URL, runtime: impDevModeEqual });
    Identifiers.interpolate = new compile_metadata_1.CompileIdentifierMetadata({ name: 'interpolate', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impInterpolate });
    return Identifiers;
}());
exports.Identifiers = Identifiers;
function identifierToken(identifier) {
    return new compile_metadata_1.CompileTokenMetadata({ identifier: identifier });
}
exports.identifierToken = identifierToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLW5GSVNqbWhwLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUE4RCxvQkFBb0IsQ0FBQyxDQUFBO0FBQ25GLHFCQUFvQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3BFLDhCQUFnRCx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3pGLDJCQUlPLHFDQUFxQyxDQUFDLENBQUE7QUFDN0MsaUNBUU8scURBQXFELENBQUMsQ0FBQTtBQUM3RCw2QkFBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSx3QkFBeUIsa0NBQWtDLENBQUMsQ0FBQTtBQUM1RCw0QkFBeUIsc0NBQXNDLENBQUMsQ0FBQTtBQUNoRSxtQ0FBK0IsNkNBQTZDLENBQUMsQ0FBQTtBQUM3RSxvQkFBNkQsOEJBQThCLENBQUMsQ0FBQTtBQUM1RixxQkFBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSwwQkFBdUIsb0NBQW9DLENBQUMsQ0FBQTtBQUM1RCx1QkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQUNuRCx5QkFBdUIsK0JBQStCLENBQUMsQ0FBQTtBQUN2RCw2QkFBd0MsdUNBQXVDLENBQUMsQ0FBQTtBQUNoRixxQkFBNEIsUUFBUSxDQUFDLENBQUE7QUFFckMsSUFBSSxtQkFBbUIsR0FBRyx5Q0FBeUMsR0FBRyxvQkFBYSxDQUFDO0FBQ3BGLElBQUkscUJBQXFCLEdBQUcsK0NBQStDLEdBQUcsb0JBQWEsQ0FBQztBQUM1RixJQUFJLGFBQWEsR0FBRywrREFBK0QsR0FBRyxvQkFBYSxDQUFDO0FBRXBHLHdEQUF3RDtBQUN4RCx1REFBdUQ7QUFDdkQsMEJBQTBCO0FBQzFCLElBQUksa0JBQWtCLEdBQUcsOEJBQWUsQ0FBQztBQUN6QyxJQUFJLFVBQVUsR0FBRyxjQUFPLENBQUM7QUFDekIsSUFB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Rix3Q0FBNEIsR0FBRyxJQUFJLDRDQUF5QixDQUFDO1FBQ2xFLElBQUksRUFBRSw4QkFBOEI7UUFDcEMsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxPQUFPLEVBQUUsK0JBQStCO0tBQ3pDLENBQUMsQ0FBQztJQUNJLHdCQUFZLEdBQUcsSUFBSSw0Q0FBeUIsQ0FDL0MsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUM7SUFDekUsdUJBQVcsR0FBRyxJQUFJLDRDQUF5QixDQUM5QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO0lBQ3hGLGtCQUFDO0FBQUQsQ0FBQyxBQXhHRCxJQXdHQztBQXhHWSxtQkFBVyxjQXdHdkIsQ0FBQTtBQUVELHlCQUFnQyxVQUFxQztJQUNuRSxNQUFNLENBQUMsSUFBSSx1Q0FBb0IsQ0FBQyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFGZSx1QkFBZSxrQkFFOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0FwcFZpZXcsIERlYnVnQXBwVmlld30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXcnO1xuaW1wb3J0IHtTdGF0aWNOb2RlRGVidWdJbmZvLCBEZWJ1Z0NvbnRleHR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JztcbmltcG9ydCB7XG4gIGZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXMsXG4gIGludGVycG9sYXRlLFxuICBjaGVja0JpbmRpbmdcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnO1xuaW1wb3J0IHtcbiAgdW5pbml0aWFsaXplZCxcbiAgZGV2TW9kZUVxdWFsLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZhbHVlVW53cmFwcGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JTdGF0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7QXBwVmlld01hbmFnZXJffSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19tYW5hZ2VyJztcbmltcG9ydCB7QXBwRWxlbWVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnQnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWYnO1xuaW1wb3J0IHtWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19jb250YWluZXJfcmVmJztcbmltcG9ydCB7UmVuZGVyZXIsIFJlbmRlckNvbXBvbmVudFR5cGUsIFJlbmRlckRlYnVnSW5mb30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaSc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7Vmlld1R5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X3R5cGUnO1xuaW1wb3J0IHtRdWVyeUxpc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlcic7XG5pbXBvcnQge0luamVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaS9pbmplY3Rvcic7XG5pbXBvcnQge1RlbXBsYXRlUmVmLCBUZW1wbGF0ZVJlZl99IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci90ZW1wbGF0ZV9yZWYnO1xuaW1wb3J0IHtNT0RVTEVfU1VGRklYfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgQVBQX1ZJRVdfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXcnICsgTU9EVUxFX1NVRkZJWDtcbnZhciBWSUVXX1VUSUxTX01PRFVMRV9VUkwgPSAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3V0aWxzJyArIE1PRFVMRV9TVUZGSVg7XG52YXIgQ0RfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJyArIE1PRFVMRV9TVUZGSVg7XG5cbi8vIFJlYXNzaWduIHRoZSBpbXBvcnRzIHRvIGRpZmZlcmVudCB2YXJpYWJsZXMgc28gd2UgY2FuXG4vLyBkZWZpbmUgc3RhdGljIHZhcmlhYmxlcyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBpbXBvcnQuXG4vLyAob25seSBuZWVkZWQgZm9yIERhcnQpLlxudmFyIGltcEFwcFZpZXdNYW5hZ2VyXyA9IEFwcFZpZXdNYW5hZ2VyXztcbnZhciBpbXBBcHBWaWV3ID0gQXBwVmlldztcbnZhciBpbXBEZWJ1Z0FwcFZpZXcgPSBEZWJ1Z0FwcFZpZXc7XG52YXIgaW1wRGVidWdDb250ZXh0ID0gRGVidWdDb250ZXh0O1xudmFyIGltcEFwcEVsZW1lbnQgPSBBcHBFbGVtZW50O1xudmFyIGltcEVsZW1lbnRSZWYgPSBFbGVtZW50UmVmO1xudmFyIGltcFZpZXdDb250YWluZXJSZWYgPSBWaWV3Q29udGFpbmVyUmVmO1xudmFyIGltcENoYW5nZURldGVjdG9yUmVmID0gQ2hhbmdlRGV0ZWN0b3JSZWY7XG52YXIgaW1wUmVuZGVyQ29tcG9uZW50VHlwZSA9IFJlbmRlckNvbXBvbmVudFR5cGU7XG52YXIgaW1wUXVlcnlMaXN0ID0gUXVlcnlMaXN0O1xudmFyIGltcFRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG52YXIgaW1wVGVtcGxhdGVSZWZfID0gVGVtcGxhdGVSZWZfO1xudmFyIGltcFZhbHVlVW53cmFwcGVyID0gVmFsdWVVbndyYXBwZXI7XG52YXIgaW1wSW5qZWN0b3IgPSBJbmplY3RvcjtcbnZhciBpbXBWaWV3RW5jYXBzdWxhdGlvbiA9IFZpZXdFbmNhcHN1bGF0aW9uO1xudmFyIGltcFZpZXdUeXBlID0gVmlld1R5cGU7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcbnZhciBpbXBTdGF0aWNOb2RlRGVidWdJbmZvID0gU3RhdGljTm9kZURlYnVnSW5mbztcbnZhciBpbXBSZW5kZXJlciA9IFJlbmRlcmVyO1xudmFyIGltcFNpbXBsZUNoYW5nZSA9IFNpbXBsZUNoYW5nZTtcbnZhciBpbXBVbmluaXRpYWxpemVkID0gdW5pbml0aWFsaXplZDtcbnZhciBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlID0gQ2hhbmdlRGV0ZWN0b3JTdGF0ZTtcbnZhciBpbXBGbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzID0gZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcztcbnZhciBpbXBEZXZNb2RlRXF1YWwgPSBkZXZNb2RlRXF1YWw7XG52YXIgaW1wSW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbnZhciBpbXBDaGVja0JpbmRpbmcgPSBjaGVja0JpbmRpbmc7XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVycyB7XG4gIHN0YXRpYyBBcHBWaWV3TWFuYWdlcl8gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0FwcFZpZXdNYW5hZ2VyXycsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X21hbmFnZXInICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBBcHBWaWV3TWFuYWdlcl9cbiAgfSk7XG4gIHN0YXRpYyBBcHBWaWV3ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcEFwcFZpZXd9KTtcbiAgc3RhdGljIERlYnVnQXBwVmlldyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdEZWJ1Z0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcERlYnVnQXBwVmlld30pO1xuICBzdGF0aWMgQXBwRWxlbWVudCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnQXBwRWxlbWVudCcsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50JyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wQXBwRWxlbWVudFxuICB9KTtcbiAgc3RhdGljIEVsZW1lbnRSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0VsZW1lbnRSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBFbGVtZW50UmVmXG4gIH0pO1xuICBzdGF0aWMgVmlld0NvbnRhaW5lclJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVmlld0NvbnRhaW5lclJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X2NvbnRhaW5lcl9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3Q29udGFpbmVyUmVmXG4gIH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdG9yUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0b3JfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgfSk7XG4gIHN0YXRpYyBSZW5kZXJDb21wb25lbnRUeXBlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdSZW5kZXJDb21wb25lbnRUeXBlJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvcmVuZGVyL2FwaScgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFJlbmRlckNvbXBvbmVudFR5cGVcbiAgfSk7XG4gIHN0YXRpYyBRdWVyeUxpc3QgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1F1ZXJ5TGlzdCcsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9xdWVyeV9saXN0JyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUXVlcnlMaXN0XG4gIH0pO1xuICBzdGF0aWMgVGVtcGxhdGVSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1RlbXBsYXRlUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFRlbXBsYXRlUmVmXG4gIH0pO1xuICBzdGF0aWMgVGVtcGxhdGVSZWZfID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdUZW1wbGF0ZVJlZl8nLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdGVtcGxhdGVfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVGVtcGxhdGVSZWZfXG4gIH0pO1xuICBzdGF0aWMgVmFsdWVVbndyYXBwZXIgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnVmFsdWVVbndyYXBwZXInLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcFZhbHVlVW53cmFwcGVyfSk7XG4gIHN0YXRpYyBJbmplY3RvciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnSW5qZWN0b3InLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9kaS9pbmplY3RvciR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcEluamVjdG9yXG4gIH0pO1xuICBzdGF0aWMgVmlld0VuY2Fwc3VsYXRpb24gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1ZpZXdFbmNhcHN1bGF0aW9uJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldycgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFZpZXdFbmNhcHN1bGF0aW9uXG4gIH0pO1xuICBzdGF0aWMgVmlld1R5cGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1ZpZXdUeXBlJyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdHlwZSR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcFZpZXdUeXBlXG4gIH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdGlvblN0cmF0ZWd5JyxcbiAgICBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsXG4gICAgcnVudGltZTogaW1wQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbiAgfSk7XG4gIHN0YXRpYyBTdGF0aWNOb2RlRGVidWdJbmZvID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdTdGF0aWNOb2RlRGVidWdJbmZvJyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2RlYnVnX2NvbnRleHQke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBTdGF0aWNOb2RlRGVidWdJbmZvXG4gIH0pO1xuICBzdGF0aWMgRGVidWdDb250ZXh0ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdEZWJ1Z0NvbnRleHQnLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZGVidWdfY29udGV4dCR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcERlYnVnQ29udGV4dFxuICB9KTtcbiAgc3RhdGljIFJlbmRlcmVyID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdSZW5kZXJlcicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL3JlbmRlci9hcGknICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBSZW5kZXJlclxuICB9KTtcbiAgc3RhdGljIFNpbXBsZUNoYW5nZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdTaW1wbGVDaGFuZ2UnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcFNpbXBsZUNoYW5nZX0pO1xuICBzdGF0aWMgdW5pbml0aWFsaXplZCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICd1bmluaXRpYWxpemVkJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBVbmluaXRpYWxpemVkfSk7XG4gIHN0YXRpYyBDaGFuZ2VEZXRlY3RvclN0YXRlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0NoYW5nZURldGVjdG9yU3RhdGUnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdG9yU3RhdGV9KTtcbiAgc3RhdGljIGNoZWNrQmluZGluZyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdjaGVja0JpbmRpbmcnLCBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wQ2hlY2tCaW5kaW5nfSk7XG4gIHN0YXRpYyBmbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdmbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzJyxcbiAgICBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCxcbiAgICBydW50aW1lOiBpbXBGbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzXG4gIH0pO1xuICBzdGF0aWMgZGV2TW9kZUVxdWFsID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ2Rldk1vZGVFcXVhbCcsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wRGV2TW9kZUVxdWFsfSk7XG4gIHN0YXRpYyBpbnRlcnBvbGF0ZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdpbnRlcnBvbGF0ZScsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBJbnRlcnBvbGF0ZX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllclRva2VuKGlkZW50aWZpZXI6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEpOiBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHJldHVybiBuZXcgQ29tcGlsZVRva2VuTWV0YWRhdGEoe2lkZW50aWZpZXI6IGlkZW50aWZpZXJ9KTtcbn1cbiJdfQ==