/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         url: "url",
 *         chatbotId: "chatbot_id"
 *     }
 */
export interface WebsiteIngestionRequest {
    url: string;
    chatbotId: string;
    /** Maximum crawl depth */
    maxDepth?: number;
}
