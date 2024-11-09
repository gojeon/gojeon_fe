const color = {
    BLACK: '#1E1D1D',
    WHITE: '#FFFEFC',
    BG: '#F8F3EB',

    MAIN_1: '#6D673A',
    MAIN_2: '#FF9B25',
    MAIN_3: '#FFAF51',
    MAIN_4: '#FFC076',

    SUB_1: '#74706A',
    SUB_2: '#95918C',
    SUB_3: '#B9B5B1',
    SUB_4: '#EBE5DD',
    SUB_5: '#E8E1D8',

    WARN: '#EA4713',
};

const darkColor = {
    BLACK: color.WHITE,
    WHITE: color.BLACK,
    BG: '#333',
};

const device = {
    PC: `screen and (min-width: 768px)`,
};

const style = {
    WIDTH: '45rem',
    LEFT: '50%',
    TRANSFORM: 'translateX(-50%)',
};

export const defaultTheme = {
    color,
    device,
    style,
};

export const darkTheme = {
    ...defaultTheme,
    color: {
        ...color,
        ...darkColor,
    },
};

export type ColorTypes = typeof color;
export type DeviceTypes = typeof device;
export type StyleTypes = typeof style;
