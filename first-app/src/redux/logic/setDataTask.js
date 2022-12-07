import getTasks from "../../rest/task/getTasks";
import {useEffect} from "react";
import {setPriority, setTasks} from "../store/taskSlice";
import {useDispatch} from "react-redux";

export default () => {

    const dispatch = useDispatch()
    const [dataTask, setDataTask] = getTasks()

    useEffect(() => {
        let max = 0;
        let min = 0;
        dataTask.map(it => min = it.priority)

        dataTask.map((it) => {
            dispatch(setTasks(it));

            if (it.priority > max) {
                max = it.priority;
            }

            if (it.priority < min) {
                min = it.priority;
            }
        });

        dispatch(setPriority({
            maxPriority: max,
            minPriority: min
        }))

    }, [dataTask])
}