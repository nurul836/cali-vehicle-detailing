"""Regenerate committed responsive WebP assets (requires Python Pillow)."""
from pathlib import Path
from PIL import Image, ImageOps
root = Path(__file__).resolve().parent.parent / 'public' / 'images'
original = optimized = mobile = 0
for source in sorted(root.glob('*.jpg')):
    image = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
    original += source.stat().st_size
    for width in (640, 960, 1600):
        resized = image.copy()
        resized.thumbnail((width, round(image.height * width / image.width)), Image.Resampling.LANCZOS)
        target = source.with_name(f'{source.stem}-{width}.webp')
        resized.save(target, 'WEBP', quality=80, method=6)
        if width == 1600: optimized += target.stat().st_size
        if width == 640: mobile += target.stat().st_size
print(f'Original JPEGs: {original:,} bytes; desktop WebP: {optimized:,}; mobile WebP: {mobile:,}')
