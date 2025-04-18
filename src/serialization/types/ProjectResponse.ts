/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as InfloatApi from "../../api/index";
import * as core from "../../core";

export const ProjectResponse: core.serialization.ObjectSchema<
    serializers.ProjectResponse.Raw,
    InfloatApi.ProjectResponse
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date()),
    isPublic: core.serialization.property("is_public", core.serialization.boolean()),
    ownerId: core.serialization.property("owner_id", core.serialization.string()),
});

export declare namespace ProjectResponse {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        created_at: string;
        updated_at: string;
        is_public: boolean;
        owner_id: string;
    }
}
