/**
 * API for project 3d-inventory
 * Run CRUD od 3d-inventory data model.
 *
 * OpenAPI spec version: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Save information about application upstage
 */
export interface Log { 
    /**
     * Incremental log Id
     */
    id: string;
    /**
     * Date as string
     */
    date: string;
    /**
     * Log message
     */
    message: string;
}