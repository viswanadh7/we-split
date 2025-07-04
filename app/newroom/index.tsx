import AutoComplete from '@/components/AutoComplete';
import ContributorChip from '@/components/ContributorChip';
import CustomText from '@/components/CustomText';
import CustomTextInput from '@/components/CustomTextInput';
import CustomView from '@/components/CustomView';
import { useGlobalState } from '@/hooks/global-state';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Vibration,
    View,
} from 'react-native';

const NewRoom = () => {
    const { theme } = useGlobalState();
    const contributors = [
        { id: 1, name: 'Ramesh' },
        { id: 2, name: 'Sowmya' },
        { id: 3, name: 'Venkatesh' },
        { id: 4, name: 'Keerthi' },
        { id: 5, name: 'Arun' },
    ];
    const [selectedContributors, setSelectedContributors] = useState<
        { id: number; name: string }[]
    >([]);
    const handleSelect = (value: { id: number; name: string }) => {
        setSelectedContributors([...selectedContributors, value]);
    };
    const handleRemove = (value: { id: number; name: string }) => {
        Vibration.vibrate(40);
        const updatedContributors = selectedContributors.filter(
            (item) => item.id !== value.id
        );
        setSelectedContributors(updatedContributors);
    };
    return (
        <CustomView>
            <CustomText style={{ fontSize: 20 }}>NewRoom</CustomText>
            <CustomTextInput
                label="Room name"
                placeholder="Give a name to the room"
            />
            <View>
                <FlatList
                    data={selectedContributors}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                        <ContributorChip
                            key={index}
                            name={item.name}
                            onPress={() => handleRemove(item)}
                        />
                    )}
                />
            </View>
            <CustomText style={{ fontSize: 18, marginBottom: 5 }}>
                Add contributors
            </CustomText>
            <AutoComplete
                data={contributors}
                placeholder="Search fruits"
                onSelect={handleSelect}
            />
            <TouchableOpacity
                style={[styles.button, { borderColor: theme.colors.border }]}
            >
                <CustomText>Create</CustomText>
            </TouchableOpacity>
        </CustomView>
    );
};

export default NewRoom;

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 120,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginTop: 20,
    },
});
