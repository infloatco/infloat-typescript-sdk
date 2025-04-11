/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as InfloatApi from "../../api/index";
import * as core from "../../core";
import { ProjectResponse } from "../types/ProjectResponse";

export const Response: core.serialization.Schema<
    serializers.getProjectsProjectsGet.Response.Raw,
    InfloatApi.ProjectResponse[]
> = core.serialization.list(ProjectResponse);

export declare namespace Response {
    type Raw = ProjectResponse.Raw[];
}
