import Button from '@mui/material/Button';

const Pagination = ({ power, page, total, prevPage, nextPage }) => {
    return (
        <div>
            {power ? <div className='centered mt3'>
                <Button onClick={() => prevPage()} variant="contained">Prev</Button>
                <p className='ms2 me2'>{page + 1}/{total + 1}</p>
                <Button onClick={() => nextPage()} variant="contained">Next</Button>
            </div> : null}
        </div>
    )
}

export default Pagination