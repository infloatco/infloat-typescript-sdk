/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as InfloatApi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as serializers from "../../../../serialization/index";

export declare namespace Chatbot {
    export interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Chatbot {
    constructor(protected readonly _options: Chatbot.Options) {}

    /**
     * Check if the current user has access to the chatbot.
     *
     * @param {InfloatApi.ChatbotApiV1ChatbotChatCompletionsGetRequest} request
     * @param {Chatbot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InfloatApi.UnprocessableEntityError}
     *
     * @example
     *     await client.chatbot.chatbot({
     *         uniqueCode: "unique_code"
     *     })
     */
    public async chatbot(
        request: InfloatApi.ChatbotApiV1ChatbotChatCompletionsGetRequest,
        requestOptions?: Chatbot.RequestOptions,
    ): Promise<unknown> {
        const { uniqueCode } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["unique_code"] = uniqueCode;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/chatbot/chat/completions"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "infloat-ts",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "infloat-ts/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new InfloatApi.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.InfloatApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.InfloatApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.InfloatApiTimeoutError(
                    "Timeout exceeded when calling GET /api/v1/chatbot/chat/completions.",
                );
            case "unknown":
                throw new errors.InfloatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get all chatbots belonging to the current user.
     *
     * @param {Chatbot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chatbot.getAllUserChatbots()
     */
    public async getAllUserChatbots(requestOptions?: Chatbot.RequestOptions): Promise<InfloatApi.ChatbotResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/chatbot/"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "infloat-ts",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "infloat-ts/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.chatbot.getAllUserChatbots.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.InfloatApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.InfloatApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.InfloatApiTimeoutError("Timeout exceeded when calling GET /api/v1/chatbot/.");
            case "unknown":
                throw new errors.InfloatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new chatbot for the current user.
     *
     * @param {InfloatApi.BodyCreateChatbotApiV1ChatbotPost} request
     * @param {Chatbot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InfloatApi.UnprocessableEntityError}
     *
     * @example
     *     await client.chatbot.createChatbot({
     *         chatbotName: "chatbot_name"
     *     })
     */
    public async createChatbot(
        request: InfloatApi.BodyCreateChatbotApiV1ChatbotPost,
        requestOptions?: Chatbot.RequestOptions,
    ): Promise<InfloatApi.ChatbotResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/chatbot/"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "infloat-ts",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "infloat-ts/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/x-www-form-urlencoded",
            requestType: "json",
            body: serializers.BodyCreateChatbotApiV1ChatbotPost.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ChatbotResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new InfloatApi.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.InfloatApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.InfloatApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.InfloatApiTimeoutError("Timeout exceeded when calling POST /api/v1/chatbot/.");
            case "unknown":
                throw new errors.InfloatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetch chatbots with optional filters:
     * - `id`: Fetch a specific chatbot by its ID.
     *
     * @param {string} chatbotId
     * @param {Chatbot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InfloatApi.UnprocessableEntityError}
     *
     * @example
     *     await client.chatbot.getChatbots("chatbot_id")
     */
    public async getChatbots(
        chatbotId: string,
        requestOptions?: Chatbot.RequestOptions,
    ): Promise<InfloatApi.ChatbotResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/chatbot/${encodeURIComponent(chatbotId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "infloat-ts",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "infloat-ts/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.chatbot.getChatbots.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new InfloatApi.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.InfloatApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.InfloatApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.InfloatApiTimeoutError(
                    "Timeout exceeded when calling GET /api/v1/chatbot/{chatbot_id}.",
                );
            case "unknown":
                throw new errors.InfloatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a specific chatbot.
     *
     * @param {string} chatbotId
     * @param {InfloatApi.BodyUpdateChatbotApiV1ChatbotChatbotIdPut} request
     * @param {Chatbot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InfloatApi.UnprocessableEntityError}
     *
     * @example
     *     await client.chatbot.updateChatbot("chatbot_id", {
     *         name: "name"
     *     })
     */
    public async updateChatbot(
        chatbotId: string,
        request: InfloatApi.BodyUpdateChatbotApiV1ChatbotChatbotIdPut,
        requestOptions?: Chatbot.RequestOptions,
    ): Promise<InfloatApi.ChatbotResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/chatbot/${encodeURIComponent(chatbotId)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "infloat-ts",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "infloat-ts/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/x-www-form-urlencoded",
            requestType: "json",
            body: serializers.BodyUpdateChatbotApiV1ChatbotChatbotIdPut.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ChatbotResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new InfloatApi.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.InfloatApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.InfloatApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.InfloatApiTimeoutError(
                    "Timeout exceeded when calling PUT /api/v1/chatbot/{chatbot_id}.",
                );
            case "unknown":
                throw new errors.InfloatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a specific chatbot.
     *
     * @param {string} chatbotId
     * @param {Chatbot.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link InfloatApi.UnprocessableEntityError}
     *
     * @example
     *     await client.chatbot.deleteChatbot("chatbot_id")
     */
    public async deleteChatbot(chatbotId: string, requestOptions?: Chatbot.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/chatbot/${encodeURIComponent(chatbotId)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "infloat-ts",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "infloat-ts/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new InfloatApi.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.InfloatApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.InfloatApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.InfloatApiTimeoutError(
                    "Timeout exceeded when calling DELETE /api/v1/chatbot/{chatbot_id}.",
                );
            case "unknown":
                throw new errors.InfloatApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
