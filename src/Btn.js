import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                backgroundColor: '#337ab7',
                borderRadius:5,
                alignItems: "center",
            width: 325,
                paddingVertical: 9,
                marginVertical: -5,
                marginRight: 32
            }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    )
}