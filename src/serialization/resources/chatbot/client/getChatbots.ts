/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as InfloatApi from "../../../../api/index";
import * as core from "../../../../core";
import { ChatbotResponse } from "../../../types/ChatbotResponse";

export const Response: core.serialization.Schema<
    serializers.chatbot.getChatbots.Response.Raw,
    InfloatApi.ChatbotResponse[]
> = core.serialization.list(ChatbotResponse);

export declare namespace Response {
    export type Raw = ChatbotResponse.Raw[];
}
