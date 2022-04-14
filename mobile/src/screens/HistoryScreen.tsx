import React from "react";
import SafeView from '../components/root/View'
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Task } from "../../types";
import OnGoingtaskPlaceHolder from "../components/nested/placeholder/onGoingTask/OnGoingtask";
import TopButtons from "../components/nested/mainScreen/TopButtons";
import * as uuid from 'uuid';

const HistoryScreen:React.FC = () => {
    const TaskList:Task[] = useSelector((state:RootState) => state.TaskList);
    return(
        <SafeView>
            <TopButtons/>
            <View>
                {
                    TaskList.length === 0 ? (
                        <OnGoingtaskPlaceHolder/>
                    ) : (
                        <FlatList
                            data={TaskList}
                            renderItem={({item}) => <Text>{item.title}</Text>}
                            keyExtractor={ item => uuid.v4()}
                        />
                    )
                }                
            </View>

        </SafeView>
    )
}




export default HistoryScreen;