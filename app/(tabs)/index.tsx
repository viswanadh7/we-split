import ContributorCard from '@/components/ContributorCard';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import TotalCard from '@/components/TotalCard';
import React from 'react';
import { StyleSheet, View } from 'react-native';

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
            <View>
                <CustomText style={styles.heading}>WeSplit</CustomText>
                <CustomText style={styles.tagline}>
                    For friends who share everything — even bills.
                </CustomText>
            </View>
            <View style={styles.cardView}>
                <TotalCard total={7593} />
            </View>
            <View>
                <CustomText style={{ fontSize: 20 }}>Contributors:</CustomText>
                {contributors.map((item, index) => (
                    <ContributorCard
                        key={index}
                        name={item.name}
                        amount={item.amount}
                    />
                ))}
            </View>
        </CustomView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    tagline: {
        fontWeight: 'light',
        width: '60%',
        marginTop: 5,
    },
    cardView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
    },
});
