import ContributorCard from '@/components/ContributorCard';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import Header from '@/components/Header';
import TotalCard from '@/components/TotalCard';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const Dashboard = () => {
    const contributors = [
        { name: 'Ramesh', amount: 1520 },
        { name: 'Sowmya', amount: 1380 },
        { name: 'Venkatesh', amount: 1843 },
        { name: 'Keerthi', amount: 1095 },
        { name: 'Arun', amount: 1755 },
    ];

    return (
        <CustomView>
            <Header />
            <CustomText
                style={{
                    fontSize: 20,
                    marginTop: 30,
                    textDecorationLine: 'underline',
                }}
            >
                Room name:
            </CustomText>
            <View style={styles.cardView}>
                <TotalCard total={7593} />
            </View>
            <View>
                <CustomText style={{ fontSize: 20 }}>Contributors:</CustomText>
                <FlatList
                    data={contributors}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <ContributorCard
                            key={index}
                            name={item.name}
                            amount={item.amount}
                        />
                    )}
                />
            </View>
        </CustomView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    cardView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
});
