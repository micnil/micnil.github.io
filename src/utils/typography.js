import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';
moragaTheme.headerWeight = '400';
moragaTheme.googleFonts.push({
  name: 'Source Sans Pro',
  styles: ['200', '400', '400i', '700'],
});
moragaTheme.headerFontFamily.unshift('Source Sans Pro');
const typography = new Typography(moragaTheme);

export default typography;
