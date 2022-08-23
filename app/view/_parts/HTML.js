
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

export const HTML = (props) => {
    const {width} = useWindowDimensions()
    return <RenderHtml 
            contentWidth={ width } 
            source={ {html: props.content} } 
            enableExperimentalMarginCollapsing={true} />
    
}