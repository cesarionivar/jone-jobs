export const SearchJob = () => {
  return (
    <form className='absolute top-4 left-4 flex flex-col'>
      <label htmlFor='search'>Search for a Job</label>
      <input
        type='text'
        placeholder='Search job'
        className='px-2 py-1'
        id='search'
      />
    </form>
  );
};
