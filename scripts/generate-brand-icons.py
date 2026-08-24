import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_nux_icon(size=512):
    # Create high-res image with RGBA
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    scale = size / 512.0
    
    # 1. Draw rounded rectangle background (Squircle)
    pad = int(16 * scale)
    radius = int(110 * scale)
    
    # Forest green base with radial depth
    # Draw base squircle
    draw.rounded_rectangle(
        [pad, pad, size - pad, size - pad],
        radius=radius,
        fill=(10, 37, 23, 255), # #0a2517 Deep Forest
        outline=(16, 185, 129, 230), # #10b981 Emerald border
        width=max(1, int(12 * scale))
    )
    
    # Inner subtle gradient overlay (lighter emerald in top-right)
    highlight_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    h_draw = ImageDraw.Draw(highlight_layer)
    h_draw.rounded_rectangle(
        [pad + int(8*scale), pad + int(8*scale), size - pad - int(8*scale), size - pad - int(8*scale)],
        radius=radius - int(6*scale),
        outline=(52, 211, 153, 90), # Mint inner hairline
        width=max(1, int(4 * scale))
    )
    img = Image.alpha_composite(img, highlight_layer)
    draw = ImageDraw.Draw(img)
    
    # 2. Geometry for the iconic "N" monogram
    # Left stem: x1=120, x2=192, y1=118, y2=394
    # Right stem: x1=320, x2=392, y1=118, y2=394
    # Diagonal: from (120, 118) to (392, 394)
    stem_w = int(68 * scale)
    left_x = int(122 * scale)
    right_x = int(390 * scale)
    top_y = int(124 * scale)
    bot_y = int(388 * scale)
    corner_r = int(18 * scale)
    
    # Draw left stem (Vertical bar) in pure Luminous Mint
    draw.rounded_rectangle(
        [left_x, top_y, left_x + stem_w, bot_y],
        radius=corner_r,
        fill=(110, 231, 183, 255) # #6ee7b7 Luminous Mint
    )
    
    # Draw right stem (Vertical bar) in pure Luminous Mint
    draw.rounded_rectangle(
        [right_x - stem_w, top_y, right_x, bot_y],
        radius=corner_r,
        fill=(110, 231, 183, 255) # #6ee7b7 Luminous Mint
    )
    
    # Draw diagonal connecting band
    # Polygon points for seamless angular connection
    diag_pts = [
        (left_x, top_y + int(10*scale)),
        (left_x + stem_w, top_y),
        (right_x, bot_y - int(10*scale)),
        (right_x, bot_y),
        (right_x - stem_w, bot_y),
        (left_x, top_y + int(60*scale)),
    ]
    draw.polygon(diag_pts, fill=(52, 211, 153, 255)) # #34d399
    
    # Add growth spark / accent node on top right stem
    spark_center_x = right_x - int(stem_w / 2)
    spark_center_y = top_y + int(24 * scale)
    spark_r = int(16 * scale)
    draw.ellipse(
        [spark_center_x - spark_r, spark_center_y - spark_r, spark_center_x + spark_r, spark_center_y + spark_r],
        fill=(255, 255, 255, 255) # White core
    )
    
    return img

def create_og_image():
    # 1200x630 Open Graph Image
    w, h = 1200, 630
    img = Image.new("RGBA", (w, h), (10, 37, 23, 255)) # Deep Forest background
    draw = ImageDraw.Draw(img)
    
    # Decorative gradient background circles
    for r in range(400, 50, -30):
        alpha = int(12 * (1 - r/400))
        draw.ellipse([800 - r, 315 - r, 800 + r, 315 + r], fill=(16, 185, 129, alpha))
        draw.ellipse([200 - r, 400 - r, 200 + r, 400 + r], fill=(52, 211, 153, alpha))
        
    # Draw outer card border
    draw.rectangle([0, 0, w, h], outline=(16, 185, 129, 60), width=4)
    
    # Draw logo icon on left
    icon = create_nux_icon(240)
    img.paste(icon, (100, 195), icon)
    
    # Draw text banners and labels
    # We can draw clean shapes and lines
    draw.rounded_rectangle([390, 190, 720, 235], radius=12, fill=(16, 185, 129, 40), outline=(52, 211, 153, 120), width=2)
    
    # Draw decorative accent lines
    draw.line([390, 420, 1100, 420], fill=(16, 185, 129, 80), width=2)
    
    return img

def create_svg_icon():
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061a10"/>
      <stop offset="50%" stop-color="#0a2517"/>
      <stop offset="100%" stop-color="#0f3823"/>
    </linearGradient>
    <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a7f3d0"/>
      <stop offset="50%" stop-color="#6ee7b7"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#10b981" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background Squircle Container -->
  <rect x="20" y="20" width="472" height="472" rx="112" fill="url(#bgGrad)" stroke="#10b981" stroke-width="12" stroke-opacity="0.9" filter="url(#glow)"/>
  
  <!-- Subtle Inner Hairline -->
  <rect x="30" y="30" width="452" height="452" rx="102" fill="none" stroke="#34d399" stroke-width="3" stroke-opacity="0.3"/>

  <!-- Left Stem -->
  <rect x="124" y="124" width="68" height="264" rx="20" fill="url(#mintGrad)"/>

  <!-- Right Stem -->
  <rect x="320" y="124" width="68" height="264" rx="20" fill="url(#mintGrad)"/>

  <!-- Dynamic Growth Diagonal Beam -->
  <path d="M 124 136 L 192 124 L 388 376 L 388 388 L 320 388 L 124 186 Z" fill="#34d399"/>

  <!-- Growth Accent Node / Sparkle -->
  <circle cx="354" cy="158" r="16" fill="#ffffff"/>
  <circle cx="354" cy="158" r="24" fill="#ffffff" fill-opacity="0.25"/>
</svg>'''
    return svg

def main(output_dir="public"):
    os.makedirs(output_dir, exist_ok=True)
    
    # 1. Generate SVG
    svg_content = create_svg_icon()
    svg_path = os.path.join(output_dir, "favicon.svg")
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Generated: {svg_path}")
    
    # 2. Master 512x512 icon
    master_512 = create_nux_icon(512)
    master_512.save(os.path.join(output_dir, "icon-512.png"), "PNG")
    print(f"Generated: {output_dir}/icon-512.png")
    
    # 3. 192x192 icon
    icon_192 = master_512.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save(os.path.join(output_dir, "icon-192.png"), "PNG")
    print(f"Generated: {output_dir}/icon-192.png")
    
    # 4. Apple Touch Icon 180x180
    apple_icon = master_512.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(os.path.join(output_dir, "apple-touch-icon.png"), "PNG")
    print(f"Generated: {output_dir}/apple-touch-icon.png")
    
    # 5. Favicon 32x32
    fav_32 = master_512.resize((32, 32), Image.Resampling.LANCZOS)
    fav_32.save(os.path.join(output_dir, "favicon-32x32.png"), "PNG")
    print(f"Generated: {output_dir}/favicon-32x32.png")
    
    # 6. Favicon 16x16
    fav_16 = master_512.resize((16, 16), Image.Resampling.LANCZOS)
    fav_16.save(os.path.join(output_dir, "favicon-16x16.png"), "PNG")
    print(f"Generated: {output_dir}/favicon-16x16.png")
    
    # 7. Multi-resolution ICO (16, 32, 48, 64, 256)
    fav_48 = master_512.resize((48, 48), Image.Resampling.LANCZOS)
    fav_64 = master_512.resize((64, 64), Image.Resampling.LANCZOS)
    fav_256 = master_512.resize((256, 256), Image.Resampling.LANCZOS)
    
    ico_path = os.path.join(output_dir, "favicon.ico")
    master_512.save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (256, 256)],
        append_images=[fav_16, fav_32, fav_48, fav_64, fav_256]
    )
    print(f"Generated multi-res ICO: {ico_path}")
    
    # 8. OG Image 1200x630
    og_img = create_og_image()
    og_path = os.path.join(output_dir, "og-image.png")
    og_img.save(og_path, "PNG")
    print(f"Generated OG Image: {og_path}")
    
    # 9. Web App Manifest
    manifest_content = '''{
  "name": "Nux Growth AI Guide",
  "short_name": "Nux Growth",
  "description": "الدليل الميداني والمنظومة التفاعلية لهندسة وتطبيقات الـ Prompt",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a2517",
  "theme_color": "#0a2517",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any"
    }
  ]
}
'''
    manifest_path = os.path.join(output_dir, "site.webmanifest")
    with open(manifest_path, "w", encoding="utf-8") as f:
        f.write(manifest_content)
    print(f"Generated Manifest: {manifest_path}")

if __name__ == "__main__":
    main()
