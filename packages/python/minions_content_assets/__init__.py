"""
Minions Content-assets Python SDK

Text posts, image briefs, video briefs, and generated asset references
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Content-assets.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
