/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as InfloatApi from "../../api/index";
import * as core from "../../core";

export const FilePathResponse: core.serialization.ObjectSchema<
    serializers.FilePathResponse.Raw,
    InfloatApi.FilePathResponse
> = core.serialization.object({
    path: core.serialization.string(),
    message: core.serialization.string(),
});

export declare namespace FilePathResponse {
    export interface Raw {
        path: string;
        message: string;
    }
}
