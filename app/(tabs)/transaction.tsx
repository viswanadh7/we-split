import ContributorCheck from '@/components/ContributorCheck';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useGlobalState } from '@/hooks/global-state';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

type TransactionType = {
    amount: string;
    description: string;
};
type ContributorType = {
    id: number;
    name: string;
    isChecked: boolean;
    amount?: number;
};

const Transaction = () => {
    const { theme } = useGlobalState();
    const [transaction, setTransaction] = useState<TransactionType>({
        amount: '',
        description: '',
    });
    const [contributors, setContributors] = useState<ContributorType[]>([
        { id: 1, name: 'Ramesh', isChecked: true },
        { id: 2, name: 'Sowmya', isChecked: true },
        { id: 3, name: 'Venkatesh', isChecked: true },
        { id: 4, name: 'Keerthi', isChecked: true },
        { id: 5, name: 'Arun', isChecked: true },
    ]);

    const handleStatusChange = (contributor: ContributorType) => {
        const updatedContributors = contributors.map((item) =>
            item.id === contributor.id
                ? { ...item, isChecked: !item.isChecked }
                : item
        );
        setContributors(updatedContributors);
    };

    const handleSubmit = () => {
        const addedContributors = contributors.filter((item) => item.isChecked);
        const split = Math.floor(
            Number(transaction.amount) / addedContributors.length
        );
        const extra =
            Number(transaction.amount) - split * addedContributors.length;
        const randomIndex = Math.floor(
            Math.random() * addedContributors.length
        );
        const result = addedContributors.map((item, index) => ({
            ...item,
            amount: index === randomIndex ? split + extra : split,
        }));
        console.log(result);
    };

    return (
        <CustomView>
            <CustomText style={{ fontSize: 25 }}>New transaction</CustomText>
            <TextInput
                keyboardType="numeric"
                placeholder="₹"
                placeholderTextColor={theme.colors.border}
                style={[
                    styles.amount,
                    {
                        color: theme.colors.text,
                        borderColor: theme.colors.text,
                    },
                ]}
                value={transaction.amount}
                onChangeText={(e) =>
                    setTransaction({ ...transaction, amount: e })
                }
            />
            <TextInput
                placeholder="Add a brief description on what you spent"
                placeholderTextColor={theme.colors.border}
                multiline
                style={[
                    styles.description,
                    {
                        color: theme.colors.text,
                        borderColor: theme.colors.text,
                    },
                ]}
                value={transaction.description}
                onChangeText={(e) =>
                    setTransaction({ ...transaction, description: e })
                }
            />
            <TouchableOpacity
                onPress={handleSubmit}
                style={[
                    styles.button,
                    {
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.text,
                    },
                ]}
            >
                <CustomText style={{ fontSize: 18 }}>Split</CustomText>
            </TouchableOpacity>
            <FlatList
                data={contributors}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <ContributorCheck
                        key={index}
                        name={item.name}
                        isChecked={item.isChecked}
                        onPress={() => handleStatusChange(item)}
                    />
                )}
            />
        </CustomView>
    );
};

export default Transaction;

const styles = StyleSheet.create({
    amount: {
        borderBottomWidth: 1,
        fontSize: 50,
        textAlign: 'center',
        marginVertical: 50,
    },
    description: {
        borderBottomWidth: 1,
        fontSize: 18,
    },
    button: {
        height: 40,
        width: 120,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 'auto',
    },
});
