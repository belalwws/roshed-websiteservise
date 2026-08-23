import os
import glob
from pathlib import Path
from PIL import Image, ImageFilter
import numpy as np

artifact_dir = Path(r"C:\Users\belal\.gemini\antigravity-ide\brain\db149790-a54f-4d28-bd50-e9a8fabd2b63")
out_dir = Path(r"d:\tazkera-academy\public\assets\generated")
public_assets = Path(r"d:\tazkera-academy\public\assets")

out_dir.mkdir(parents=True, exist_ok=True)
public_assets.mkdir(parents=True, exist_ok=True)

mapping = {
    'brand_emblem_3d': 'brand-logo',
    'quran_rehal_3d': 'quran-rehal',
    'program_quran_3d': 'program-quran',
    'program_arabic_3d': 'program-arabic',
    'program_qaida_3d': 'program-qaida',
    'program_islamic_3d': 'program-islamic',
    'kid_student_3d': 'kid-student',
    'adult_student_3d': 'adult-student',
    'teacher_male_3d': 'teacher-1',
    'teacher_female_3d': 'teacher-2',
    'contact_lantern_3d': 'contact-lantern',
    'about_mission_3d': 'about-mission',
    'certificate_badge_3d': 'certificate-badge',
    'global_learning_3d': 'global-learning',
}

def remove_background(im_path, is_portrait=False):
    im = Image.open(im_path).convert('RGB')
    w, h = im.size
    arr = np.array(im, dtype=np.float32)
    
    # Calculate difference from white background (255, 255, 255)
    # Background in our generations is [248..255, 248..255, 248..255]
    diff = 255.0 - np.min(arr, axis=2) # distance from white
    
    # Simple & robust alpha ramp
    # Below 8 diff -> 0 alpha (pure background)
    # Above 32 diff -> 255 alpha (foreground)
    # In-between -> linear blend
    alpha = np.clip((diff - 6.0) * (255.0 / 26.0), 0, 255).astype(np.uint8)
    
    # Flood-fill connectivity from corners to prevent removing white inside the subject
    # We do a floodfill on background mask
    from scipy.ndimage import binary_fill_holes
    # For now, let's create a smooth alpha mask
    alpha_img = Image.fromarray(alpha, 'L').filter(ImageFilter.GaussianBlur(0.8))
    
    rgba = im.convert('RGBA')
    rgba.putalpha(alpha_img)
    
    # Crop bounding box
    bbox = rgba.getbbox()
    if bbox:
        # Add slight padding
        pad = 24
        x0 = max(0, bbox[0] - pad)
        y0 = max(0, bbox[1] - pad)
        x1 = min(w, bbox[2] + pad)
        y1 = min(h, bbox[3] + pad)
        rgba = rgba.crop((x0, y0, x1, y1))
        
    return rgba

for prefix, dest_name in mapping.items():
    files = list(artifact_dir.glob(f"{prefix}_*.jpg"))
    if not files:
        print(f"Warning: No file found for {prefix}")
        continue
    latest_file = max(files, key=os.path.getmtime)
    print(f"Processing {prefix} -> {dest_name} from {latest_file.name}")
    
    is_portrait = 'student' in dest_name or 'teacher' in dest_name
    processed = remove_background(latest_file, is_portrait=is_portrait)
    
    dest_path = out_dir / f"{dest_name}.png"
    processed.save(dest_path, "PNG", optimize=True)
    print(f"Saved {dest_path} ({processed.size})")

    # If it's brand logo, also save as logo.png in public/assets
    if dest_name == 'brand-logo':
        processed.save(public_assets / "logo.png", "PNG", optimize=True)
        print("Updated public/assets/logo.png")

print("All assets processed successfully!")
