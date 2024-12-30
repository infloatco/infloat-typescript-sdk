/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as InfloatApi from "../../api/index";
import * as core from "../../core";
import { DocumentResponse } from "./DocumentResponse";

export const ChatbotResponse: core.serialization.ObjectSchema<
    serializers.ChatbotResponse.Raw,
    InfloatApi.ChatbotResponse
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    documents: core.serialization.list(DocumentResponse).optional(),
});

export declare namespace ChatbotResponse {
    export interface Raw {
        id: string;
        name: string;
        user_id: string;
        documents?: DocumentResponse.Raw[] | null;
    }
}
