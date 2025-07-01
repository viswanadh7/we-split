import CustomView from '@/components/CustomView';
import HistoryCard from '@/components/HistoryCard';
import { transactions } from '@/sample-data';
import React from 'react';
import { ScrollView } from 'react-native';

const History = () => {
    return (
        <CustomView>
            <ScrollView>
                {transactions.map((item, index) => (
                    <HistoryCard
                        key={index}
                        date={item.date}
                        name={item.name}
                        amount={item.amount}
                        description={item.description}
                    />
                ))}
            </ScrollView>
        </CustomView>
    );
};

export default History;
