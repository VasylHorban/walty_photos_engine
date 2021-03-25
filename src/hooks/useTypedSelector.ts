import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RooteState } from '../redux/ducks';

export const useTypedSelector : TypedUseSelectorHook<RooteState> = useSelector
