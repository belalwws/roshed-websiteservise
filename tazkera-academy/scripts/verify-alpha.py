from PIL import Image
from pathlib import Path
for p in sorted(Path('public/assets/generated').glob('*.png')):
    im=Image.open(p).convert('RGBA')
    a=im.getchannel('A')
    extrema=a.getextrema()
    vals=list(a.getdata())
    transparent=sum(1 for v in vals if v==0)
    total=im.width*im.height
    print(f'{p.name}: {im.size}, alpha={extrema}, transparent={transparent/total*100:.1f}%')
