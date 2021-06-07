import React from 'react';
import Link from 'next/link';
import { StoreData } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { getServerSideProps } from '../../service/api';

const notes = [
    { name: 'my-note' },
    { name: 'my-note-2' },
    { name: 'my-note-3' },
];

function Productlist(props) {
    
    
    return (
        <div>
            {notes.map(note => {
                return <div>
                    <Link as={'/components/' + note.name} href="/components/[details]">
                        <a>{note.name}</a>
                    </Link>
                </div>
            })}
        </div>
    );
}

export default Productlist;