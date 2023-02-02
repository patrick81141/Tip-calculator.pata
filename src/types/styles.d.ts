import 'styled-components';
import { Theme } from '../Themes/defaultTheme';


declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
};