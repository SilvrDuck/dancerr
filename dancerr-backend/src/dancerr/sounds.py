import yaml

from dancerr.models import Sound

sound_collection = {}

with open('sound_config.yaml') as file:
    sound_config = yaml.safe_load(file)
    for sound in sound_config['sounds']:
        sound_collection[sound['id']] = Sound(**sound)
