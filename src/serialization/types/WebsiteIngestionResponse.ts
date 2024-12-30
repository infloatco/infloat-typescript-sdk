/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as InfloatApi from "../../api/index";
import * as core from "../../core";

export const WebsiteIngestionResponse: core.serialization.ObjectSchema<
    serializers.WebsiteIngestionResponse.Raw,
    InfloatApi.WebsiteIngestionResponse
> = core.serialization.object({
    message: core.serialization.string(),
    url: core.serialization.string(),
    maxDepth: core.serialization.property("max_depth", core.serialization.number()),
});

export declare namespace WebsiteIngestionResponse {
    export interface Raw {
        message: string;
        url: string;
        max_depth: number;
    }
}