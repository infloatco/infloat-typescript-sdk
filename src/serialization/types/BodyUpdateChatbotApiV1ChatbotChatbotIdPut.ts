/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as InfloatApi from "../../api/index";
import * as core from "../../core";

export const BodyUpdateChatbotApiV1ChatbotChatbotIdPut: core.serialization.ObjectSchema<
    serializers.BodyUpdateChatbotApiV1ChatbotChatbotIdPut.Raw,
    InfloatApi.BodyUpdateChatbotApiV1ChatbotChatbotIdPut
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace BodyUpdateChatbotApiV1ChatbotChatbotIdPut {
    export interface Raw {
        name: string;
    }
}