from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from starlette.status import HTTP_200_OK

from dancerr.models import MinimalSound, SoundResponse, SoundsQuery
from dancerr.sounds import sound_collection

app = FastAPI(root_path="/api/v1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
)

@app.get("/sounds")
async def get_sounds() -> SoundResponse:
    return  SoundResponse(
        sounds=[
            MinimalSound.from_sound(sound) for sound in sound_collection.values()
        ]
    )

@app.post("/sounds/{sound_id}")
async def play_sounds(sound_id: str) -> int:

    print(f"Playing sound {sound_collection[sound_id].name}")

    return HTTP_200_OK