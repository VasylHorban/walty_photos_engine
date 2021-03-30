import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/ducks';

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
