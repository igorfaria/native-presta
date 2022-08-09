import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const StyleMediaQuery = (media) => {

    let mediaValue = {};
    let mediaKeys = Object.keys(media);
    mediaKeys = mediaKeys.map(function(item) { return parseInt(item, 10) });
    mediaKeys.sort(function(a, b) { return a - b });
    
    const window = Dimensions.get('window');
    mediaKeys.forEach(function(queryWidth){
        const item = media[queryWidth];
        if(window.width >= queryWidth) {
            mediaValue = item;    
        }
    }); 

    if(!mediaValue) mediaValue = {};
    return mediaValue;
}

export default StyleMediaQuery;