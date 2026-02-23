"""
Minions Content-assets SDK — Type Schemas
Custom MinionType schemas for Minions Content-assets.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

text_post_type = MinionType(
    id="content-assets-text-post",
    name="Text post",
    slug="text-post",
    description="A social media text post draft or final.",
    icon="💬",
    schema=[
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="hashtags", type="string", label="hashtags"),
        FieldDefinition(name="calendarSlotId", type="string", label="calendarSlotId"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="generationMode", type="select", label="generationMode"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

image_brief_type = MinionType(
    id="content-assets-image-brief",
    name="Image brief",
    slug="image-brief",
    description="A brief for generating or sourcing a social image.",
    icon="🖼️",
    schema=[
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="prompt", type="string", label="prompt"),
        FieldDefinition(name="style", type="string", label="style"),
        FieldDefinition(name="dimensions", type="string", label="dimensions"),
        FieldDefinition(name="generatedUrl", type="string", label="generatedUrl"),
        FieldDefinition(name="generationMode", type="select", label="generationMode"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

video_brief_type = MinionType(
    id="content-assets-video-brief",
    name="Video brief",
    slug="video-brief",
    description="A brief for generating or sourcing a social video.",
    icon="🎬",
    schema=[
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="prompt", type="string", label="prompt"),
        FieldDefinition(name="style", type="string", label="style"),
        FieldDefinition(name="durationSeconds", type="number", label="durationSeconds"),
        FieldDefinition(name="generatedUrl", type="string", label="generatedUrl"),
        FieldDefinition(name="generationMode", type="select", label="generationMode"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

asset_bundle_type = MinionType(
    id="content-assets-asset-bundle",
    name="Asset bundle",
    slug="asset-bundle",
    description="A combined post+image+video package ready for publishing.",
    icon="📦",
    schema=[
        FieldDefinition(name="textPostId", type="string", label="textPostId"),
        FieldDefinition(name="imageBriefId", type="string", label="imageBriefId"),
        FieldDefinition(name="videoBriefId", type="string", label="videoBriefId"),
        FieldDefinition(name="calendarSlotId", type="string", label="calendarSlotId"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="assembledAt", type="string", label="assembledAt"),
    ],
)

custom_types: list[MinionType] = [
    text_post_type,
    image_brief_type,
    video_brief_type,
    asset_bundle_type,
]

