from PIL import Image, ImageFilter
from pathlib import Path
import numpy as np

src = Path('public/assets/generated/raw')
out = Path('public/assets/generated')
out.mkdir(parents=True, exist_ok=True)

names = ['quran-rehal','arabic-books','kid-student','adult-student','teacher-1','teacher-2','islamic-books']

for name in names:
    im = Image.open(src / f'{name}.jpg').convert('RGB')
    arr = np.array(im).astype(np.int16)
    # distance from white; generated sources use a near-white seamless studio background
    dist = 255 - arr.min(axis=2)
    # fully transparent near white, feather transition for clean antialiased edges
    alpha = np.clip((dist - 6) * (255 / 34), 0, 255).astype(np.uint8)
    # suppress low-saturation bright background remnants
    mx = arr.max(axis=2); mn = arr.min(axis=2); sat = mx - mn
    bright_neutral = (mn > 218) & (sat < 22)
    alpha[bright_neutral] = np.minimum(alpha[bright_neutral], 18)
    a = Image.fromarray(alpha, 'L').filter(ImageFilter.GaussianBlur(0.7))
    rgba = im.convert('RGBA')
    rgba.putalpha(a)
    # crop transparent padding, then add safe transparent margin
    bbox = rgba.getbbox()
    if bbox:
        rgba = rgba.crop(bbox)
    margin = 48
    canvas = Image.new('RGBA', (rgba.width + margin*2, rgba.height + margin*2), (0,0,0,0))
    canvas.alpha_composite(rgba, (margin, margin))
    canvas.save(out / f'{name}.png', optimize=True)
    print(name, canvas.size)
