/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as InfloatApi from "../../api/index";
import * as core from "../../core";

export const UserResponse: core.serialization.ObjectSchema<serializers.UserResponse.Raw, InfloatApi.UserResponse> =
    core.serialization.object({
        id: core.serialization.string(),
    });

export declare namespace UserResponse {
    export interface Raw {
        id: string;
    }
}
