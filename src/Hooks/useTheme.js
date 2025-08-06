import { useContext } from "react";

import {ThemeContext} from '../Providers/ThemeContext'

const useTheme = () => useContext(ThemeContext);

export default useTheme;