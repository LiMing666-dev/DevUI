interface RGB {
    r: number;
    g: number;
    b: number;
}

function isContrastWithWhite(backgroundColor: string): boolean {
    // 将颜色转换为RGB
    const rgb = hexToRgb(backgroundColor) || parseColor(backgroundColor);
    if (!rgb) return true; // 如果无法解析颜色，默认返回true

    // 白色RGB
    const white: RGB = { r: 255, g: 255, b: 255 };

    // 计算相对亮度
    const luminance1 = calculateLuminance(rgb.r, rgb.g, rgb.b);
    const luminance2 = calculateLuminance(white.r, white.g, white.b);

    // 计算对比度
    const contrast = (Math.max(luminance1, luminance2) + 0.05) /
        (Math.min(luminance1, luminance2) + 0.05);

    // WCAG AA标准要求至少4.5:1的对比度
    // 如果对比度小于这个值，则认为冲突
    return contrast >= 4.5;
}

// 计算相对亮度
function calculateLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs]: any = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// 十六进制颜色转RGB
function hexToRgb(hex: string): RGB | null {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m: string, r: string, g: string, b: string) => r + r + g + g + b + b);

    const result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// 解析颜色字符串
function parseColor(color: string): RGB | null {
    // 移除空格
    color = color.replace(/\s/g, '');

    // RGB颜色
    const rgbMatch: any = color.match(/^rgb\((\d+),(\d+),(\d+)\)$/i);
    if (rgbMatch) {
        return {
            r: parseInt(rgbMatch[1]),
            g: parseInt(rgbMatch[2]),
            b: parseInt(rgbMatch[3])
        };
    }

    // RGBA颜色（忽略alpha通道）
    const rgbaMatch: any = color.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/i);
    if (rgbaMatch) {
        return {
            r: parseInt(rgbaMatch[1]),
            g: parseInt(rgbaMatch[2]),
            b: parseInt(rgbaMatch[3])
        };
    }

    // 颜色名称
    const colorNames: { [key: string]: RGB } = {
        black: { r: 0, g: 0, b: 0 },
        white: { r: 255, g: 255, b: 255 },
        red: { r: 255, g: 0, b: 0 },
        green: { r: 0, g: 128, b: 0 },
        blue: { r: 0, g: 0, b: 255 },
        yellow: { r: 255, g: 255, b: 0 },
        gray: { r: 128, g: 128, b: 128 },
        grey: { r: 128, g: 128, b: 128 },
        lightgray: { r: 211, g: 211, b: 211 },
        lightgrey: { r: 211, g: 211, b: 211 },
        darkgray: { r: 169, g: 169, b: 169 },
        darkgrey: { r: 169, g: 169, b: 169 },
        orange: { r: 255, g: 165, b: 0 },
        purple: { r: 128, g: 0, b: 128 },
        pink: { r: 255, g: 192, b: 203 },
        brown: { r: 165, g: 42, b: 42 },
        cyan: { r: 0, g: 255, b: 255 },
        magenta: { r: 255, g: 0, b: 255 },
        // 可以添加更多颜色名称...
    };

    return colorNames[color.toLowerCase()] || null;
}

export const isContrastWithWhiteSimpl = (backgroundColor: string): boolean => {
    const rgb = hexToRgb(backgroundColor) || parseColor(backgroundColor);
    if (!rgb) return true;

    // 计算亮度（简化公式）
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

    // 如果亮度接近白色（255），则认为冲突
    // 阈值可以根据需要调整
    return brightness < 200; // 阈值设为200，值越小检测越严格
}