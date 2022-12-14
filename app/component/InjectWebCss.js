import { Platform } from 'react-native'

const noGlow = `
textarea, select, input, button {
	-webkit-appearance: none;
	outline: none!important;
}
textarea:focus, select:focus, input:focus, button:focus {
	-webkit-appearance: none;
	outline: none!important;
}
`

export const InjectWebCss = f => {
	// Only on web
	if ( !Platform.OS == 'web' ) return
	// Inject style
	const style = document.createElement('style')
	style.textContent = noGlow;
	return document.head.append(style)

}