/**
 * @module @minions-content-assets/sdk/schemas
 * Custom MinionType schemas for Minions Content-assets.
 */

import type { MinionType } from 'minions-sdk';

export const textpostType: MinionType = {
  id: 'content-assets-text-post',
  name: 'Text post',
  slug: 'text-post',
  description: 'A social media text post draft or final.',
  icon: '💬',
  schema: [
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'hashtags', type: 'string', label: 'hashtags' },
    { name: 'calendarSlotId', type: 'string', label: 'calendarSlotId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'generationMode', type: 'select', label: 'generationMode' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const imagebriefType: MinionType = {
  id: 'content-assets-image-brief',
  name: 'Image brief',
  slug: 'image-brief',
  description: 'A brief for generating or sourcing a social image.',
  icon: '🖼️',
  schema: [
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'prompt', type: 'string', label: 'prompt' },
    { name: 'style', type: 'string', label: 'style' },
    { name: 'dimensions', type: 'string', label: 'dimensions' },
    { name: 'generatedUrl', type: 'string', label: 'generatedUrl' },
    { name: 'generationMode', type: 'select', label: 'generationMode' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const videobriefType: MinionType = {
  id: 'content-assets-video-brief',
  name: 'Video brief',
  slug: 'video-brief',
  description: 'A brief for generating or sourcing a social video.',
  icon: '🎬',
  schema: [
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'prompt', type: 'string', label: 'prompt' },
    { name: 'style', type: 'string', label: 'style' },
    { name: 'durationSeconds', type: 'number', label: 'durationSeconds' },
    { name: 'generatedUrl', type: 'string', label: 'generatedUrl' },
    { name: 'generationMode', type: 'select', label: 'generationMode' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const assetbundleType: MinionType = {
  id: 'content-assets-asset-bundle',
  name: 'Asset bundle',
  slug: 'asset-bundle',
  description: 'A combined post+image+video package ready for publishing.',
  icon: '📦',
  schema: [
    { name: 'textPostId', type: 'string', label: 'textPostId' },
    { name: 'imageBriefId', type: 'string', label: 'imageBriefId' },
    { name: 'videoBriefId', type: 'string', label: 'videoBriefId' },
    { name: 'calendarSlotId', type: 'string', label: 'calendarSlotId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'assembledAt', type: 'string', label: 'assembledAt' },
  ],
};

export const customTypes: MinionType[] = [
  textpostType,
  imagebriefType,
  videobriefType,
  assetbundleType,
];

