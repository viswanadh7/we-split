import CustomView from '@/components/CustomView';
import HistoryCard from '@/components/HistoryCard';
import { transactions } from '@/sample-data';
import React from 'react';
import { FlatList } from 'react-native';

const History = () => {
    return (
        <CustomView>
            <FlatList
                data={transactions}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <HistoryCard
                        key={index}
                        date={item.date}
                        name={item.name}
                        amount={item.amount}
                        description={item.description}
                    />
                )}
            />
        </CustomView>
    );
};

export default History;
