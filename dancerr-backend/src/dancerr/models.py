from __future__ import annotations

from pydantic import BaseModel


class Sound(BaseModel):
    id: str
    name: str
    path: str

class MinimalSound(BaseModel):
    # Only the fields that should be returned to the client
    id: str
    name: str

    def from_sound(sound: Sound) -> MinimalSound:
        return MinimalSound(
            id=sound.id,
            name=sound.name,
        )

class SoundResponse(BaseModel):
    sounds: list[MinimalSound]

class SoundsQuery(BaseModel):
    ids: list[str]

