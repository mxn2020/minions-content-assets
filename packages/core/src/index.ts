/**
 * Minions Content-assets SDK
 *
 * Text posts, image briefs, video briefs, and generated asset references
 *
 * @module @minions-content-assets/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Content-assets.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
