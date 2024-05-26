/*
* This file is generated automatically by the RTTIST TypeGen tool.
* Do not edit it manually.
*/
import { ModuleImporter, MetadataLibrary, createGetTypeFunction, createCallsite, resolveFromFunctionCallsite, resolveFromMethodCallsite, getClassTypeParameter, Type } from "rttist";

// Typelibs of depdendencies
import "rttist/dist/public.typelib";

// @ts-ignore; !! CONFIGURE THIS AS AN EXTERNAL DEPENDENCY !!
import { Metadata as InternalMetadataLibrary } from "./.typelib/internal.typelib.js";

ModuleImporter.registerImporters({
	
});

export const getType: <T>(...args: any[]) => Type = createGetTypeFunction(InternalMetadataLibrary);
export const resolveType = InternalMetadataLibrary.resolveType.bind(InternalMetadataLibrary);
export const _ = {
	cs$: createCallsite,
	resFnCs$: resolveFromFunctionCallsite,
	resMCs$: resolveFromMethodCallsite,
	getTP$: getClassTypeParameter,
};
/** @internal */
export const Metadata: MetadataLibrary = InternalMetadataLibrary;