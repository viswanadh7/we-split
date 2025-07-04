import { useGlobalState } from '@/hooks/global-state';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import CustomText from './CustomText';

type DataType = { id: number; name: string };

type AutoCompleteProps = {
    data: DataType[];
    placeholder?: string;
    onSelect: (value: DataType) => void;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    listStyle?: ViewStyle;
    itemStyle?: TextStyle;
};

const AutoComplete: React.FC<AutoCompleteProps> = ({
    data,
    placeholder,
    onSelect,
    containerStyle,
    inputStyle,
    listStyle,
    itemStyle,
}) => {
    const { theme } = useGlobalState();
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (text: string) => {
        setQuery(text);
        if (text.length > 0) {
            const filtered = data.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
            setShowDropdown(true);
        } else {
            setFilteredData([]);
            setShowDropdown(false);
        }
    };

    const handleSelect = (item: DataType) => {
        setQuery(item.name);
        setShowDropdown(false);
        onSelect(item);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[
                    styles.input,
                    {
                        borderColor: theme.colors.border,
                        color: theme.colors.text,
                    },
                    inputStyle,
                ]}
                placeholder={placeholder || 'Type here...'}
                placeholderTextColor={theme.colors.border}
                value={query}
                onChangeText={handleChange}
            />
            {showDropdown && filteredData.length > 0 && (
                <View
                    style={[
                        styles.dropdown,
                        {
                            backgroundColor: theme.colors.background,
                            borderColor: theme.colors.border,
                        },
                        listStyle,
                    ]}
                >
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleSelect(item)}
                            >
                                <CustomText
                                    style={[
                                        styles.item,
                                        {
                                            borderBottomColor:
                                                theme.colors.border,
                                        },
                                        itemStyle,
                                    ]}
                                >
                                    {item.name}
                                </CustomText>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%' },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        fontSize: 18,
    },
    dropdown: {
        position: 'absolute',
        top: 50,
        width: '100%',
        borderWidth: 1,
        maxHeight: 150,
        borderRadius: 6,
        zIndex: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
    },
});

export default AutoComplete;
