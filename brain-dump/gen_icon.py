"""Generate Brain Dump icon: anatomical side-view brain with thought flow."""

import math
from PIL import Image, ImageDraw

SIZE = 1024
img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

INK = (26, 26, 46)
TEAL = (94, 207, 207)
TEAL_DARK = (42, 157, 157)
TEAL_LIGHT = (168, 232, 232)
PAPER = (249, 247, 244)
WHITE = (255, 255, 255)

draw.rounded_rectangle((60, 60, 964, 964), radius=200, fill=PAPER, outline=INK, width=20)

cx, cy = 490, 330
SX, SY = 280, 220  # wider horizontally, same height

# Anatomical side-view brain control points (facing left)
# With bumpy gyri edges
raw = [
    # Brain stem (bottom center)
    (0.05, 0.72),
    # Under temporal lobe, going forward
    (-0.15, 0.68), (-0.35, 0.62), (-0.50, 0.50),
    # Temporal pole (front-bottom bump)
    (-0.62, 0.38), (-0.68, 0.28),
    # Frontal lobe front edge (going up with bumps for gyri)
    (-0.72, 0.15), (-0.75, 0.02), (-0.73, -0.10),
    (-0.70, -0.22), (-0.74, -0.32),
    (-0.68, -0.45), (-0.60, -0.55),
    # Frontal lobe top (big rounded dome)
    (-0.48, -0.68), (-0.32, -0.76), (-0.15, -0.80),
    # Top of brain with gyri bumps
    (0.00, -0.82), (0.12, -0.79), (0.22, -0.82),
    (0.35, -0.78), (0.45, -0.80),
    # Parietal going back
    (0.55, -0.74), (0.62, -0.65), (0.66, -0.52),
    # Occipital lobe (back)
    (0.68, -0.38), (0.70, -0.22), (0.68, -0.05),
    (0.64, 0.08),
    # Indent between occipital and cerebellum
    (0.55, 0.15), (0.48, 0.18),
    # Cerebellum (small rounded bump)
    (0.52, 0.30), (0.56, 0.42), (0.52, 0.52),
    (0.44, 0.56), (0.36, 0.52), (0.32, 0.44),
    # Under cerebellum back to brain stem
    (0.28, 0.52), (0.20, 0.60), (0.12, 0.68),
    (0.05, 0.72),
]

def catmull_rom(pts, steps=8):
    result = []
    n = len(pts)
    for i in range(n):
        for s in range(steps):
            t = s / steps
            p0, p1 = pts[(i - 1) % n], pts[i]
            p2, p3 = pts[(i + 1) % n], pts[(i + 2) % n]
            t2, t3 = t * t, t * t * t
            x = 0.5 * ((2*p1[0]) + (-p0[0]+p2[0])*t + (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2 + (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3)
            y = 0.5 * ((2*p1[1]) + (-p0[1]+p2[1])*t + (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2 + (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)
            result.append((x, y))
    return result

smooth = catmull_rom(raw, steps=10)
outline = [(cx + x * SX, cy + y * SY) for x, y in smooth]

# Shadow
draw.polygon([(x + 7, y + 7) for x, y in outline], fill=(0, 0, 0, 30))
# Fill
draw.polygon(outline, fill=TEAL_LIGHT)
# Thick outline
draw.polygon(outline, fill=TEAL_LIGHT, outline=INK, width=10)

# --- Sylvian fissure (deep lateral sulcus) ---
pts = []
for t in range(45):
    frac = t / 44
    x = cx - 130 + frac * 280
    y = cy + 20 - frac * 50 + 15 * math.sin(frac * math.pi * 0.9)
    pts.append((x, y))
draw.line(pts, fill=TEAL_DARK, width=8, joint="curve")

# --- Central sulcus (divides frontal/parietal) ---
pts = []
for t in range(25):
    frac = t / 24
    x = cx + 5 + 15 * math.sin(frac * math.pi * 1.2) + frac * 20
    y = cy - 175 + frac * 195
    pts.append((x, y))
draw.line(pts, fill=TEAL_DARK, width=7, joint="curve")

# --- Gyri folds (curvy sulci across the surface) ---
folds = [
    # Frontal lobe
    (-110, -90, 70, -0.2, 12), (-80, -40, 60, 0.5, 10), (-120, 5, 65, 1.0, 10),
    (-60, -130, 55, 0.8, 8),
    # Parietal
    (50, -130, 60, 1.5, 10), (80, -75, 55, 2.0, 9), (100, -30, 45, 0.3, 8),
    # Temporal
    (-40, 50, 75, 0.3, 9), (10, 75, 65, 1.2, 8), (60, 45, 50, 2.0, 7),
]
for x0, y0, length, phase, amp in folds:
    pts = []
    for t in range(18):
        frac = t / 17
        x = cx + x0 + frac * length + amp * math.sin(frac * math.pi * 2.2 + phase)
        y = cy + y0 + (amp * 0.8) * math.sin(frac * math.pi * 1.6 + phase + 0.5)
        pts.append((x, y))
    draw.line(pts, fill=TEAL_DARK, width=5, joint="curve")

# Cerebellum horizontal lines
for i in range(4):
    y = cy + 68 + i * 13
    x_start = cx + 78 + i * 3
    x_end = cx + 120 - i * 5
    draw.line([(x_start, y), (x_end, y)], fill=TEAL_DARK, width=3)

# --- Thought particles flowing down ---
particles = [
    (0, 50, 46, 13), (-22, 78, 36, 11), (20, 82, 38, 11),
    (0, 108, 28, 9), (-15, 130, 22, 8), (13, 134, 20, 8),
    (0, 155, 16, 6), (-8, 172, 12, 5), (7, 176, 11, 5),
]
base_y = cy + SY * 0.72 + 25
for xo, yo, w, h in particles:
    px, py = cx + xo, base_y + yo
    alpha = max(0.25, 1.0 - yo / 200)
    color = tuple(int(TEAL[c] * alpha + PAPER[c] * (1 - alpha)) for c in range(3))
    draw.rounded_rectangle((px - w, py - h, px + w, py + h), radius=h, fill=color, outline=INK, width=3)

# --- Page at bottom ---
pw, ph = 75, 92
py_c = 860
draw.rounded_rectangle((cx - pw//2 + 5, py_c - ph//2 + 5, cx + pw//2 + 5, py_c + ph//2 + 5),
                        radius=8, fill=INK)
draw.rounded_rectangle((cx - pw//2, py_c - ph//2, cx + pw//2, py_c + ph//2),
                        radius=8, fill=WHITE, outline=INK, width=6)
for i in range(4):
    ly = py_c - ph//2 + 18 + i * 15
    lw = pw - 24 - i * 4
    draw.line((cx - lw//2, ly, cx + lw//2, ly), fill=TEAL, width=4)

img.save("/Users/iforster/Developer/brain-dump/icon.png", "PNG")
print("icon.png saved")
