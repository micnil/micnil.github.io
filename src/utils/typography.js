import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';
moragaTheme.headerWeight = '400';
moragaTheme.googleFonts.push({
  name: 'Raleway',
  styles: ['200', '400', '400i', '700'],
});
moragaTheme.headerFontFamily.unshift('Raleway');
const typography = new Typography(moragaTheme);

export default typography;
