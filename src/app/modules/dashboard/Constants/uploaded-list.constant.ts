import {InputDataEntry} from '../../user-input/constants/user-input.constant'
export interface MetaInterface{
    label: string;
    key: keyof InputDataEntry;
}
export const TABLE_METADATA : MetaInterface[]= [
    {
        label: 'Coal consumption',
        key: 'coalConsumption',
    },
    {
        label: 'Biomass consumption',
        key: 'bioMass',
    },
    {
        label: 'Electricity consumption',
        key: 'electricityConsumption',
    },
    {
        label: 'Incoming Raw Materials',
        key: 'incomingRoadLogistics',
    },
    {
        label: 'Outgoing Finished Materials',
        key: 'outgoingRoadLogistics',
    },
    {
        label: 'Month',
        key: 'month',
    },
    {
        label: 'Year',
        key: 'year',
    },
]