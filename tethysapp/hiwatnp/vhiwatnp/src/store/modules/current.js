import {createStore} from "vuex";
import {getDataLatestHIWATInfo, getSlice, PostCurrentChartData} from '../api/current';

export default createStore({
    state() {
        return {
            basin: '',
            indices: 'Tair_f_tavg',
            periodicity: 'monthly',
            year: new Date().getFullYear() - 1,
            hiwatObject: {            //hiwat app
                HIWATDate: '',
                HIWATDateLevel: '',
                ModelDayPartation: '',
                LayerListPredictionAccumulated:[]
            }

        };
    },
    mutations: {
        setBasin(state, payload) {
            state.basin = payload;
        },
        setIndices(state, payload) {
            state.indices = payload;
        },
        setPeriodicity(state, payload) {
            state.periodicity = payload;
        },
        setYear(state, payload) {
            state.year = payload;
        },
        setHIWATDateLevel(state, payload) {
            state.HIWATDateLevel = payload;
        },
        setHIWATDate(state, payload) {

            let CopyDate = new Date(payload.getTime());
            CopyDate.setDate(CopyDate.getDate() + 1);

            const year = CopyDate.getFullYear(); // Get the year (yyyy)
            const month = String(CopyDate.getMonth() + 1).padStart(2, '0'); // Get the month (mm), and pad with leading zero if necessary
            const day = String(CopyDate.getDate()).padStart(2, '0'); // Get the day (dd), and pad with leading zero if necessary

            const formattedDate = `${year}-${month}-${day}`; // Format the date as yyyy-mm-dd

            state.HIWATDateLevel = formattedDate
            state.HIWATDate = payload;
        },
    },
    actions: {
        async SlicingThreddsCatalog(context, param) {
            let data = await getSlice(param);
            return data;
        }, async ChartDataCurrent(context, param) {
            let data = await PostCurrentChartData(param);
            return data;
        },
        async getLatestHIWATInfo() {
            let data = await getDataLatestHIWATInfo();
            return data;
        },

    },
    modules: {},
});