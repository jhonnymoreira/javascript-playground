# Hex to RGB
Hexadecimal color to RGB mode.

Open your console browser, paste the code, then type:
```javascript
rgbColor('hex-code');
```

**Usage:**
```javascript
rgbColor('aabbcc'); // Will display: [170, 187, 204]
```

There are some rules to follow:  
**1.** *Numbers:* 0 - 9  
**2.** *Letters:* a - f  
**3.** Hex code using quotation marks (even with numbers).

## How it works
Hexadecimal is equivalent to base 16 and this is everything that we **need** to know. The higher combination that we have is **16\*\*2** (16 => Numbers.length + Letters.length), resulting in 256 combinations, but our max number is 255, since the RGB channels starts at 0.

Hexadecimal colors follow a pattern **#rrggbb**, it means that the every pair is a channel on RGB. When you are dealing with a pattern like this **#rgb**, you *should* read **#rrggbb**.