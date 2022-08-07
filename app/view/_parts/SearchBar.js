import { Component } from "react";
import { _l } from "../../core/@exports";
import { TextInput, IconButton} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// input + button 
// autocomplete
export class SearchBar extends Component {
    
    render(){
        return (
            <TextInput
                label={ _l("Label") }
                variant="outlined"
                trailing={props => (
                    <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />
                )}
            />
        )
    }

}