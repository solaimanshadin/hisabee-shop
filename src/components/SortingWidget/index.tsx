import { BiSortDown, BiSortUp } from 'react-icons/bi';

type Props = any;
const SortingWidget = ({ sort, onSort }: Props) => {
    const onChange = ({ target }: any) => {
        onSort(target.value);
    };
    return (
        <div className='container sm:flex items-center  space-x-2 pt-4 pb-10'>
            <div className='flex items-center gap-2'>  {sort === 'asc' ? <BiSortDown /> : <BiSortUp />} <span> Sorted by:</span></div>

            <select className='border-transparent focus:border-transparent focus:ring-0' value={sort} onChange={onChange}>
                <option value='asc'>Ascending order</option>
                <option value='desc'>Descending order</option>
            </select>

        </div>
    );
};

export default SortingWidget;
